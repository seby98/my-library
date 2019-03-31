import { Component, OnInit } from '@angular/core';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { IBookItem } from '../interfaces/i-book-item';

@Component({
  selector: 'app-book-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  public booksList: IBookItem[];

  constructor(private remoteBookService: RemoteBookService) {
    this.booksList = [];
  }

  ngOnInit() {
    this.remoteBookService.getBooks("porno")
    .subscribe(
      (book:IBookItem) => this.booksList.push(book),
      error => console.log(error)
    );
  }
}
