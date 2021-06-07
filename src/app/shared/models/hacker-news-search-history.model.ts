import { HackerNewsSearchQueryExtended } from "./hacker-news-search-query.model";

interface HackerNewsSearchHistory_I { 

    history: Array<HackerNewsSearchQueryExtended>

}

export class HackerNewsSearchHistory implements HackerNewsSearchHistory_I{

    history: Array<HackerNewsSearchQueryExtended> = []

}