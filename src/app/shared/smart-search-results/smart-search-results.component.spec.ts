import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSearchResultsComponent } from './smart-search-results.component';

describe('SmartSearchResultsComponent', () => {
  let component: SmartSearchResultsComponent;
  let fixture: ComponentFixture<SmartSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
