import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SmartSearchResultsComponent } from './shared/smart-search-results/smart-search-results.component';
import { SmartSearchComponent } from 'src/app/shared/smart-search/smart-search.component';

@NgModule({
  declarations: [ 
    SmartSearchComponent, SmartSearchResultsComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: SmartSearchComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


