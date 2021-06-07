import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerNewsSearchHit } from 'src/app/shared/models/hacker-news-search-hit.model';

import { SearchHitComponent } from './search-hit.component';

describe('SearchResultComponent', () => {

  let component: SearchHitComponent;
  let fixture: ComponentFixture<SearchHitComponent>;

  let searchHit: HackerNewsSearchHit = {
    author: '0456fra',
    comment_text: '',
    created_at: new Date().toString(),
    created_at_i: 0,
    user_friendly_created_at: new Date().toString(),
    num_comments: 150,
    objectID: '0asdasd22',
    parent_id: '',
    points: 0,
    relevancy_score: 0,
    story_id: '0asdasd',
    story_text: 'This is a story text.',
    story_tile: 'Search Title',
    story_url: '',
    title: '',
    url: '',
    _highlightResult: null,
    _tags: null,

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(SearchHitComponent);

    component = fixture.componentInstance;
    component.searchHit = searchHit
    component.searchHit.created_at = new Date().toString()

    fixture.detectChanges();

  });

  it('should create', () => {

    
    expect(component).toBeTruthy();

  });

});
