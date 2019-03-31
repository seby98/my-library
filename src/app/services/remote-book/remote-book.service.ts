import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';
import { IGoogleBooksResponse_Item, IGoogleBooksResponse } from '../../interfaces/i-google-books-response';
import { IBookItem } from '../../interfaces/i-book-item';

@Injectable({
  providedIn: 'root'
})
export class RemoteBookService {

  private getBooksURI: string = "https://www.googleapis.com/books/v1/volumes/";

  constructor(private http: HttpClient) { }

  public getBooks(query: string): Observable<IBookItem> {
    return this.http.get(this.getBooksURI + (query ? "?q=" + query : "")).pipe(
      switchMap((res: IGoogleBooksResponse) => from(res.items)),
      map((item: IGoogleBooksResponse_Item) => {
        const book: IBookItem = {
          id: item.id,
          title: item.volumeInfo.title,
          thumbnail: item.volumeInfo.imageLinks.thumbnail
        };
        return book;
      })
    );
  }

  public getBook(bookID: string): Observable<any> {
    return this.http.get(this.getBooksURI + bookID)
  }
}
