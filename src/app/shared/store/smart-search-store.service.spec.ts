import { TestBed, inject } from '@angular/core/testing';

import { SmartSearchStoreService } from './smart-search-store.service';

describe('SmartSearchStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartSearchStoreService]
    });
  });

  it('should be created', inject([SmartSearchStoreService], (service: SmartSearchStoreService) => {
    expect(service).toBeTruthy();
  }));
});
