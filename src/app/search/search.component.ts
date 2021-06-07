import { Component, OnInit } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { debounce } from 'typescript-debounce-decorator'
import { HackerNewsSearchService } from '../services/hacker-news/hacker-news-search.service'
import { HackerNewsSearchQuery, HackerNewsSearchQueryExtended } from '../shared/models/hacker-news-search-query.model'
import { HackerNewsSearchResponse } from '../shared/models/hacker-news-search-response.model'
import { ValidateSearchQuery } from '../utility/validators/search-query.validator'
import { HackerNewsSearchHit } from '../shared/models/hacker-news-search-hit.model'
import { HackerNewsSearchHistoryService } from '../services/hacker-news/search-history/hacker-news-search-history.service'
import { formatNumber } from '@angular/common'
import * as dateFormat from 'dateformat'
import { ActivatedRoute } from '@angular/router'
import { logErrorMessage } from '../utility/operators/retry-operator'
import { MatDialog } from '@angular/material/dialog'
import { SearchApiError } from './errors/search.errors'

const SEARCH_QUERY_DATE_FORMAT = "dddd, mmmm dS, yyyy, h:MM:ss TT"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //FontAwesome Imports
  faSearch = faSearch

  loading: boolean = false
  
  searchHits: number = 0
  totalPages: number = 0
  currentPage: number = 0

  searchHitList: Array<HackerNewsSearchHit> = []

  hackerNewsSearchQuery: HackerNewsSearchQuery | null = null

  public searchForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder,
              private matDialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private hackerNewsSearchService: HackerNewsSearchService,
              private hackerNewsSearchHistoryService: HackerNewsSearchHistoryService) { }

  /**
   * Will start a search by querying the Hacker News Algolia API.
  */
   @debounce(1000) //Debounce this function so that it only fires one second after the user's last key up.
  searchApi(): void{

    if(this.searchQuery?.value == null || this.searchQuery?.value == ''){ 
      
      this.searchHits = 0
      this.searchHitList = []
      return
      
    }    

    this.loading = true

    let hackerNewsSearchQuery = new HackerNewsSearchQuery()
    hackerNewsSearchQuery.query = this.searchQuery?.value

    this.hackerNewsSearchQuery = hackerNewsSearchQuery

    this.hackerNewsSearchService.startSearch(hackerNewsSearchQuery).subscribe(

      resp => {

        //Display the Search Results
        this.populateSearchHits(resp)

      },
      err => {

        //Log the error into Sentry.

        let sentryContext: any = {
          errorName: 'Search API Error',
          requestRetries: 3,
          errorMessage: "There's been an error while searching the API. Please try again."
        }
  
        sentryContext.error = new SearchApiError(sentryContext.errorName)
        
        logErrorMessage(3, err, sentryContext, this.matDialog)
  
        this.loading = false

      }
      
    )

  }

  /**
   * Will populate search results after querying the Hacker News Algolia API.
   * @param resp Response from API.
  */
   populateSearchHits(resp: HackerNewsSearchResponse): void{

    this.searchHits = resp.nbHits
    this.totalPages = resp.nbPages

    let hackerNewsSearchQueryExtended = new HackerNewsSearchQueryExtended()
    Object.assign(hackerNewsSearchQueryExtended, this.hackerNewsSearchQuery)

    hackerNewsSearchQueryExtended.hits = this.searchHits
    hackerNewsSearchQueryExtended.page = this.currentPage
    hackerNewsSearchQueryExtended.timeOfSearchFriendly = dateFormat(hackerNewsSearchQueryExtended.timeOfSearch, SEARCH_QUERY_DATE_FORMAT)

    //Input the Search Query into the Search Results History
    this.hackerNewsSearchHistoryService.addHistoryItem(hackerNewsSearchQueryExtended)

    Array.prototype.push.apply(this.searchHitList, resp.hits)

    this.loading = false

  }

  get searchQuery(): AbstractControl | null { return this.searchForm.get('searchQuery') }
  get f() { return this.searchForm.controls }

  /**
   * Set up the search form for querying the Hacker News Algolia API.
  */
  initSearchForm(): void{

    const searchValidators = [Validators.required]

    this.searchForm = this.formBuilder.group({
      searchQuery: ['', searchValidators]
    }, {
      validators : () => {
        ValidateSearchQuery( this.searchQuery )        
      }
    })

    //Let's check if there is an exiting query parameter in our URL.
    let searchQueryParam = this.activatedRoute.snapshot.paramMap.get('query')

    if(searchQueryParam !== null){
      //A query paramter exists, we must execute the query into our search form
      console.log("Search Query", searchQueryParam)
    }

    this.loading = false

  }

  /**
   * Will load more from next page by querying the Hacker News Algolia API.
  */
  loadMore(): void{

    if(this.hackerNewsSearchQuery == null) return

    this.loading = true

    this.hackerNewsSearchQuery.page++

    this.currentPage = this.hackerNewsSearchQuery.page

    this.hackerNewsSearchService.startSearch(this.hackerNewsSearchQuery).subscribe(

      resp => {

        //Display the Search Results
        this.populateSearchHits(resp)

      }
      
    )

  }

  getFormattedHits(hits: number, locale: string){
    return formatNumber(hits, locale)
  }

  ngOnInit(): void {

    this.initSearchForm()

  }

}
