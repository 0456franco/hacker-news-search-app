import { Component, Input, OnInit } from '@angular/core';
import { faClock, faComment, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { HackerNewsSearchHit } from '../../shared/models/hacker-news-search-hit.model';
import * as dateFormat from 'dateformat'

@Component({
  selector: 'app-search-hit',
  templateUrl: './search-hit.component.html',
  styleUrls: ['./search-hit.component.scss']
})
export class SearchHitComponent implements OnInit {

  faClock = faClock
  faComment = faComment
  faStar = faStar

  //Let's define a component input for the search result we'll be working with.
  @Input() searchHit!: HackerNewsSearchHit

  faUser = faUser

  constructor() { }

  /**
   * Will open the article in a new browser tab.
   */
  goToArticle(){

    window.open(this.searchHit.url, '_blank')

  }

  ngOnInit(): void {
    
    let createdAtTime = new Date(this.searchHit.created_at)

    this.searchHit.user_friendly_created_at = dateFormat(new Date(createdAtTime), "fullDate")

  }

}
