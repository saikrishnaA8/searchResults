import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResults } from './smart-search-interface';
import { HttpClient } from '@angular/common/http';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SmartSearchApiService {

  constructor(private http: HttpClient) { }

  getResults(searchString: string): Observable<SearchResults[]> {
    const resultUrl = `https://jsonplaceholder.typicode.com/comments?q=${searchString}`;
    return this.http.get<SearchResults[]>(resultUrl)
    .pipe(map(response => response),
      share());
  }

}
