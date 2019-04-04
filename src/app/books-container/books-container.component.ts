import { Component, OnInit } from '@angular/core';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { BookItem } from '../interfaces/book-item';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  public booksList: BookItem[];
  public firstSearchDone: boolean;
  public searchError: boolean;

  //infinite scroll params
  public numberOfLoadedBooks: number;
  public maxLoadBooks: number;
  public searchedKeyWords: string;

  constructor(private remoteBookService: RemoteBookService,
              private searchService: SearchService) {
    this.booksList = [];
    this.firstSearchDone = false;
    this.searchError = false;
    this.numberOfLoadedBooks = 10;
    this.maxLoadBooks = this.numberOfLoadedBooks;
    this.searchedKeyWords = "";
  }

  ngOnInit() {
    this.searchService.searchObs.subscribe(
      value => {
        this.booksList = [];
        this.searchedKeyWords = value;
        this.firstSearchDone = true;
        this.remoteBookService.getBooks(value, 0)
        .subscribe(
          (book: BookItem) => {
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

  loadOtherBooks() {
    this.remoteBookService.getBooks(this.searchedKeyWords, this.numberOfLoadedBooks)
      .subscribe(
        (book: BookItem) => {
          this.booksList.push(book);
          this.searchError = false;
        },
        () => { }
      );
    this.numberOfLoadedBooks += this.maxLoadBooks;
  }
}
