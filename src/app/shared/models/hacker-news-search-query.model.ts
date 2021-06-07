interface HackerNewsSearchQuery_I{

    query: string
    tags: string | null
    numericFilters: string | null
    page: number
    timeOfSearch?: string
    timeOfSearchFriendly?: string
    hits?: number | string
}

export class HackerNewsSearchQuery implements HackerNewsSearchQuery_I {

    query = ''
    tags = null
    numericFilters = null
    page = 0

}

export class HackerNewsSearchQueryExtended extends HackerNewsSearchQuery {

    timeOfSearch = new Date().toString()
    timeOfSearchFriendly: string = ''
    hits: number = 0

}


