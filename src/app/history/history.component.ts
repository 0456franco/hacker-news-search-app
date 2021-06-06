import { Component, OnInit, ViewChild } from '@angular/core'
import { HackerNewsSearchQueryExtended } from '../services/hacker-news/models/hacker-news-search-query.model';
import { HackerNewsSearchHistoryService } from '../services/hacker-news/search-history/hacker-news-search-history.service';
import * as dateFormat from 'dateformat'
import { faClock, faExternalLinkAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { formatNumber } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const SEARCH_QUERY_DATE_FORMAT = "dddd, mmmm dS, yyyy, h:MM:ss TT"

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort

  faClock = faClock
  faExternalLink = faExternalLinkAlt
  faTrash = faTrash

  displayedColumns: string[] = ['position', 'query', 'timeOfSearchFriendly', 'hits', 'clickable', 'trash'];
  searchHistory: Array<HackerNewsSearchQueryExtended> = []

  sortableSearchHistory: any

  constructor(private hackerNewsSearchHistoryService: HackerNewsSearchHistoryService) { }

  getFormattedHits(hits: number, locale: string){
    return formatNumber(hits, locale)
  }

  async clearAllSearchHistory(){

    const deleteHistory = await this.hackerNewsSearchHistoryService.clearAllSearchHistory()

    if(deleteHistory == true)
      this.getSearchHistory()
    else
      alert("Problem deleting history. Please try again.")
    
  }

  getSearchHistory(){

    this.searchHistory = this.hackerNewsSearchHistoryService.getSearchHistory()

    this.sortableSearchHistory = new MatTableDataSource(this.searchHistory) 

    /**
     * It is up to the component to format the date.
     * Loop through the search history queries and format the dates accordingly.
    */
    this.searchHistory.forEach( (query) => {
      query.timeOfSearchFriendly = dateFormat(query.timeOfSearch, SEARCH_QUERY_DATE_FORMAT)
    })

  }

  async deleteSingleItem(hackerNewsSearchQuery: HackerNewsSearchQueryExtended){

    console.log("Item to delete", hackerNewsSearchQuery)

    const deleteSingleItem = await this.hackerNewsSearchHistoryService.removeHistoryItem(hackerNewsSearchQuery)

    if(deleteSingleItem == true)
      this.getSearchHistory()
    else
      alert("Problem deleting history. Please try again.")
    

  }

  ngOnInit(): void {

    this.getSearchHistory()

  }

  ngAfterViewInit() {
    this.sortableSearchHistory.sort = this.sort
  }

}
