import { HackerNewsSearchHit } from "./hacker-news-search-hit.model"

interface HackerNewsSearchResponse_I{

    //API_KEY: string

    exhaustiveNbHits: string | null
    hits: Array<HackerNewsSearchHit> | null
    hitsPerPage: string | null
    nbHits: number | null
    nbPages: number | null
    page: number | null
    params: string | null
    processingTimeMS: number | null
    query: string | null
}

export class HackerNewsSearchResponse implements HackerNewsSearchResponse_I {

    exhaustiveNbHits = ''
    hits = []
    hitsPerPage = ''
    nbHits = 0
    nbPages = 0
    page = 0
    params = ''
    processingTimeMS = 0
    query = ''

}