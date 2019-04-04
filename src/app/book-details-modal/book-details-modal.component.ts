import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { GoogleBookResponse } from '../interfaces/google-book-response';
import { TemplateBookDetails } from '../interfaces/template-book-details';
import { map } from 'rxjs/operators';
import { VolumeInfo_IndustryIdentifier } from '../interfaces/google-volume-info';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss']
})
export class BookDetailsModalComponent implements OnInit {

  public templateBookDetails: TemplateBookDetails;
  public retriveRemoteInfoComplete: boolean;

  constructor(
    private remoteBookService: RemoteBookService,
    private modalRef: MatDialogRef<BookDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.retriveRemoteInfoComplete = false;
    this.templateBookDetails = {
      title: "",
      thumbnail: "",
      description: "",
      authors: "",
      categories: "",
      isbn: "",
      publisher: "",
      publishedDate: "",
      pageCount: 0
    };
  }

  ngOnInit() {
    this.remoteBookService.getBook(this.data.bookID)
    .pipe(
      map((res: GoogleBookResponse) => {
        const _templateBookDetails: TemplateBookDetails = {
          title: res.volumeInfo.title,
          thumbnail: res.volumeInfo.imageLinks.thumbnail,
          description: res.volumeInfo.description,
          authors: res.volumeInfo.authors ? this.getStringToArray(res.volumeInfo.authors) : "",
          categories: res.volumeInfo.categories ? this.getStringToArray(res.volumeInfo.categories) : "",
          isbn: res.volumeInfo.industryIdentifiers ? this.getIsbn13(res.volumeInfo.industryIdentifiers) : "",
          publisher: res.volumeInfo.publisher,
          publishedDate: res.volumeInfo.publishedDate,
          pageCount: res.volumeInfo.pageCount
        }
        return _templateBookDetails;
      })
    )
    .subscribe(
      (__templateBookDetails: TemplateBookDetails) => {
        this.templateBookDetails = __templateBookDetails;
        this.retriveRemoteInfoComplete = true;
      },
      error => console.log(error)
    );
  }

  closeModal() {
    this.modalRef.close();
  }

  getStringToArray(_array: string[]): string {
    let _string: string = "";
    _array.forEach((strItem: string) => {
      _string = _string + strItem + " - ";
    });
    _string = _string.substr(0, _string.length - 3);
    return _string;
  }

  getIsbn13(isbnArray: VolumeInfo_IndustryIdentifier[]): string {
    let isbn: string = "";
    isbnArray.forEach((isbnItem: VolumeInfo_IndustryIdentifier) => isbnItem.type === "ISBN_13" ? isbn = isbnItem.identifier : "");
    return isbn;
  }
}