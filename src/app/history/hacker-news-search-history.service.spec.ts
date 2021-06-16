import { TestBed } from '@angular/core/testing';

import { HackerNewsSearchHistoryService } from './hacker-news-search-history.service';

describe('HackerNewsSearchHistoryService', () => {
  let service: HackerNewsSearchHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewsSearchHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
