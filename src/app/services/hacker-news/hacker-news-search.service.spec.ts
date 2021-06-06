import { TestBed } from '@angular/core/testing';
import { HackerNewsSearchService } from './hacker-news-search.service';


describe('HackerNewsSearchService', () => {
  let service: HackerNewsSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewsSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
