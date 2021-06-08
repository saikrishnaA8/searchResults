import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartSearchResultsComponent } from './shared/smart-search-results/smart-search-results.component';
import { SmartSearchComponent } from 'src/app/shared/smart-search/smart-search.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SmartSearchComponent, SmartSearchResultsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: SmartSearchComponent },
    ]),
    CommonModule,
    BrowserModule, FormsModule, HttpClientModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


