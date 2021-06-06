import { TestBed, inject } from '@angular/core/testing';

import { SmartSearchApiService } from './smart-search-api.service';

describe('SmartSearchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartSearchApiService]
    });
  });

  it('should be created', inject([SmartSearchApiService], (service: SmartSearchApiService) => {
    expect(service).toBeTruthy();
  }));
});
