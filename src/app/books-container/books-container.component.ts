import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBookItem } from '../interfaces/i-book-item';

@Component({
  selector: 'app-book-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  public booksList: IBookItem[];

  constructor(private bookService: BookService) {
    this.booksList = [];
  }

  ngOnInit() {
    this.bookService.getBooks("flower")
    .subscribe(
      (book:IBookItem) => this.booksList.push(book)
    );
  }
}
