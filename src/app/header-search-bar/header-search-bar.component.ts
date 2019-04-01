import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    const searchBar = document.querySelector('#searchInput');
    
    let searchObs = fromEvent(searchBar, 'input')
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        filter((eleEvent: Event) => eleEvent.inputType === "insertText"),
        map((eleEvent: Event) => eleEvent.target.value),
        filter((value: string) => value.length > 2)
      );
    this.searchService.storeSearchObs(searchObs);
  }
}
