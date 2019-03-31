import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {

  public searchObs: Observable<string>;

  constructor() {
    const searchBar = document.querySelector('#searchInput');
    
    this.searchObs = fromEvent(searchBar, 'input')
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        filter((eleEvent: Event) => eleEvent.inputType === "insertText"),
        map((eleEvent: Event) => eleEvent.target.value),
        filter((value: string) => value.length > 2),
      )
  }

  ngOnInit() { }
}
