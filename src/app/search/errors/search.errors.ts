export class SearchApiError extends Error {
    constructor(message: string) {
        super(message); 
        this.name = "SearchApiError"; 
    }
}
