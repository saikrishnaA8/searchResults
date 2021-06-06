import { TestBed, inject } from '@angular/core/testing';

import { SmartSearchService } from './smart-search.service';

describe('SmartSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartSearchService]
    });
  });

  it('should be created', inject([SmartSearchService], (service: SmartSearchService) => {
    expect(service).toBeTruthy();
  }));
});
