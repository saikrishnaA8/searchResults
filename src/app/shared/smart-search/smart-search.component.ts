import { Component, OnInit } from '@angular/core';
import { SmartSearchService } from '../services/smart-search.service';
import { SearchResults } from '../services/smart-search-interface';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-smart-search',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.css']
})
export class SmartSearchComponent implements OnInit {
  searchResults: SearchResults[];
  private subject: Subject<string> = new Subject();
  constructor(private Service: SmartSearchService) { }
  searchText: string;
  resultValue = false;
  textValue = '';

  ngOnInit() {
    this.getSearchResults();
    console.log(this.searchResults);
  }

  getSearchResults() {
    this.subject.pipe(debounceTime(2000))
    .subscribe(model => {
      this.resultsCall(model);
      });
    }

  resultsCall(model) {
    if (model)
    this.Service.getResults(model).subscribe((resp) => {
      this.searchResults = resp;
      this.Service.setSearchResults(this.searchResults);
      this.resultValue = false;
    });
  }

  setSearchValue(searchTextValue: string){
    if (!this.Service.isEmpty(searchTextValue) && searchTextValue.length > 3) {
    this.resultValue = true;
    this.subject.next(searchTextValue);
    } else {
      this.Service.setSearchResults([]);
    }
  }

  clearResult() {
    this.Service.setSearchResults([]);
    this.textValue = '';
  }
}
