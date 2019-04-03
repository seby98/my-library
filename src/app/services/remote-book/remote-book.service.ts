import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GoogleBooksResponse_Item, GoogleBooksResponse } from '../../interfaces/google-books-response';
import { BookItem } from '../../interfaces/book-item';

@Injectable({
  providedIn: 'root'
})
export class RemoteBookService {

  private getBooksURI: string = "https://www.googleapis.com/books/v1/volumes/";

  constructor(private http: HttpClient) { }

  public getBooks(query: string): Observable<BookItem> {
    return this.http.get(this.getBooksURI + (query ? "?q=" + query : "")).pipe(
      switchMap((res: GoogleBooksResponse) => from(res.items)),
      map((item: GoogleBooksResponse_Item) => {
        const book: BookItem = {
          id: item.id,
          title: item.volumeInfo.title,
          thumbnail: item.volumeInfo.imageLinks.thumbnail
        };
        return book;
      })
    );
  }

  public getBook(bookID: string): Observable<any> {
    return this.http.get(this.getBooksURI + bookID);
  }
}
