import { Component, OnInit } from '@angular/core';
import { SmartSearchService } from '../services/smart-search.service';

@Component({
  selector: 'app-smart-search-results',
  templateUrl: './smart-search-results.component.html',
  styleUrls: ['./smart-search-results.component.css']
})
export class SmartSearchResultsComponent implements OnInit {
  searchResults: any;
  constructor(private service: SmartSearchService) { }

  ngOnInit() {
    this.loadSearchResults();
    console.log(this.searchResults);
  }

  loadSearchResults() {
    this.service.getSearchResults().subscribe((resp) => {
      this.searchResults = resp;
      console.log(this.searchResults);
    });
  }
   toggleEllipsis() {
  let element = document.querySelector("#ellipsis-ex");
    element.classList.toggle("text-truncate");
  }

}
