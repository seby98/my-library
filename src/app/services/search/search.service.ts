import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchObs: Observable<any>;

  constructor() { }

  storeSearchObs(searchObs: Observable<string>) {
    this.searchObs = searchObs;
  }
}
