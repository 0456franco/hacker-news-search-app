export interface HackerNewsSearchHit_I {

    author: string
    comment_text: string
    created_at: string
    created_at_i: number
    user_friendly_created_at: string | null
    num_comments: number
    objectID: string
    parent_id: string | null
    points: number
    relevancy_score: number
    story_id: string | null
    story_text: string | null
    story_tile: string | null
    story_url: string | null
    title: string
    url: string
    _highlightResult: any
    _tags: any

}

export class HackerNewsSearchHit implements HackerNewsSearchHit_I {

    author = ''
    comment_text = ''
    created_at = ''
    created_at_i = 0
    user_friendly_created_at!: string
    num_comments = 0
    objectID = ''
    parent_id = ''
    points = 0
    relevancy_score = 0
    story_id = ''
    story_text = ''
    story_tile = ''
    story_url = ''
    title = ''
    url = ''
    _highlightResult: any
    _tags: any

}