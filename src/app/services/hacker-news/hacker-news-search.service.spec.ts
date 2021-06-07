import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HackerNewsSearchQuery } from 'src/app/shared/models/hacker-news-search-query.model';
import { HackerNewsSearchResponse } from 'src/app/shared/models/hacker-news-search-response.model';
import { HackerNewsSearchService } from './hacker-news-search.service';


describe('HackerNewsSearchService', () => {

  let service: HackerNewsSearchService;
  
  let searchQuery: HackerNewsSearchQuery = {
    query: 'bitcoin',
    tags: null,
    numericFilters: null,
    page: 0
  } 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    
    service = TestBed.inject(HackerNewsSearchService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  //Let's test if we can query the API and get the right response.
  it('should get a response', (done: DoneFn) => {

    service.startSearch(searchQuery).subscribe(
      resp => {
        expect(resp).toContain(HackerNewsSearchResponse)
        done()
      },
      done.fail
    )
    
  })

});
