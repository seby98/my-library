import { Injectable } from '@angular/core';
import { HeaderSearchBarComponent } from '../../header-search-bar/header-search-bar.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private searchBar: HeaderSearchBarComponent) { }

  getQuerySearchObs () {
    return this.searchBar.searchObs;
  }

}
