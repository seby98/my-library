import { Component, OnInit } from '@angular/core';
import { filter, map, debounceTime } from 'rxjs/operators';
import { SearchService } from '../services/search/search.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private searchService: SearchService) {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('')
    });
  }

  ngOnInit() {
    let searchObs = this.searchForm.valueChanges
    .pipe(
      debounceTime(200),
      map((value: any) => value.searchInput),
      filter((text: string) => text.length > 2)
    )
    this.searchService.storeSearchObs(searchObs);
  }
}
