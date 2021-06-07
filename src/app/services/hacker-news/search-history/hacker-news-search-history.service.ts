import { Injectable } from '@angular/core';
import { HackerNewsSearchHistory } from '../../../shared/models/hacker-news-search-history.model';
import { HackerNewsSearchQueryExtended } from '../../../shared/models/hacker-news-search-query.model';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsSearchHistoryService {

  constructor() { }

  /**
   * Adds an item to the user's history.
   * @param query 
   */
  addHistoryItem(query: HackerNewsSearchQueryExtended){

    let searchHistoryString = localStorage.getItem('search_history')
    
    let searchHistory: HackerNewsSearchHistory 

    if(searchHistoryString == null)

      searchHistory = new HackerNewsSearchHistory()

    else

      searchHistory = JSON.parse(searchHistoryString!)

    searchHistory.history.unshift(query)

    let newSearchHistory = JSON.stringify(searchHistory)

    localStorage.setItem('search_history', newSearchHistory)

  }

  /**
   * @returns Returns an array of all current Search Queries in history.
   */
  getSearchHistory(): Array<HackerNewsSearchQueryExtended>{

    let searchHistoryString = localStorage.getItem('search_history')

    if(searchHistoryString == null)

      return []

    else {

      let searchHistory: HackerNewsSearchHistory = JSON.parse(searchHistoryString)

      return searchHistory.history

    }

  }

  /**
   * Remove a single query from the search history.
   * @param query 
   * @returns 
   */
  async removeHistoryItem(query: HackerNewsSearchQueryExtended): Promise<boolean>{

    return new Promise((resolve, reject) => {

      let localHistory = localStorage.getItem('search_history')!

      if( localHistory != null ){
        
        //Convert the localHistory into an object.
        let searchLocalHistory: HackerNewsSearchHistory = JSON.parse(localHistory)

        //Search for the query to be deleted in the history array.
        let queryToDelete = searchLocalHistory.history.find(
          historyQuery => historyQuery.timeOfSearch === query.timeOfSearch
        );

        let itemIndex

        if(queryToDelete !== undefined)
          itemIndex = searchLocalHistory.history.indexOf(queryToDelete)
        else 
          return reject(false)

        if(itemIndex > -1){

          //Remove the query from the search history array
          searchLocalHistory.history.splice(itemIndex, 1)

          //Re-save the history into the local storage.
          localStorage.setItem('search_history', JSON.stringify(searchLocalHistory) )

          return resolve(true)

        } else return reject(false)
      
      } else return reject(false)

    })

  }

  /**
   * Clear all search history.
   * @returns Resolves to true if history was cleared, and false if there was an error.
   */
  async clearAllSearchHistory(): Promise<boolean>{

    localStorage.removeItem('search_history')

    return new Promise((resolve, reject) => {

      if( localStorage.getItem('search_history') == null )
        resolve(true)
      else
        reject(false)

    })
  
  }
  
  /**
   * Will search history for an item using a keyword and then return it.
   * @param searchKeyword 
   */
  searchHistoryForItem(searchKeyword: string){

  }

}
