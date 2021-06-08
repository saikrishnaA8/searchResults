import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject } from 'rxjs';
import { SearchResults } from './smart-search-interface';
import { SmartSearchApiService } from './smart-search-api.service';

@Injectable({
  providedIn: 'root'
})
export class SmartSearchService {
    private resultValue: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(
    private smartSearchApiService: SmartSearchApiService) { }

  getResults(sarchValue): Observable<SearchResults[]> {
    return this.smartSearchApiService.getResults(sarchValue);
  }

  isEmpty(val) {
    if (val === '' || val === undefined || val === null || val === []) {
      return false;
    }
  }
    getSearchResults(): Observable<any> {
      return this.resultValue.asObservable();
  }

  setSearchResults(profile) {
      this.resultValue.next(profile);

  }

}
