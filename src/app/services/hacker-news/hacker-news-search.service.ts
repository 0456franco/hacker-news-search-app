/**
 * 
 * This service will be used to query the Hacker News Search API.
 * 
 */

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HackerNewsSearchQuery } from '../../shared/models/hacker-news-search-query.model'
import * as queryString from  'query-string'

const API_ENDPOINT = 'https://hn.algolia.com/api'

@Injectable({
  providedIn: 'root'
})
export class HackerNewsSearchService {

  constructor(private http: HttpClient) { }

  public startSearch(query: HackerNewsSearchQuery): Observable<any>{

    let queryUrl =  queryString.stringify(query)

    const searchAPI = `${API_ENDPOINT}/v1/search?${ queryUrl }`

    return this.http.get<any>(searchAPI).pipe()
      
  }
}
