import { Component, OnInit } from '@angular/core';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { IBookItem } from '../interfaces/i-book-item';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  public booksList: IBookItem[];
  public firstSearchDone: boolean;
  public searchError: boolean;

  constructor(private remoteBookService: RemoteBookService,
              private searchService: SearchService) {
    this.booksList = [];
    this.firstSearchDone = false;
    this.searchError = false;
  }

  ngOnInit() {
    this.searchService.searchObs.subscribe(
      value => {
        this.booksList = [];
        this.firstSearchDone = true;
        this.remoteBookService.getBooks(value)
        .subscribe(
          (book:IBookItem) => {
            this.booksList.push(book);
            this.searchError = false;
          },
          () => {
            this.searchError = true;
            this.booksList = []
          }
        )
      }
    );
  }
}
