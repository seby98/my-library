import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { GoogleBookResponse } from '../interfaces/google-book-response';
import { VolumeInfo, VolumeInfo_ImageLinks, VolumeInfo_IndustryIdentifier } from '../interfaces/google-volume-info';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss']
})
export class BookDetailsModalComponent implements OnInit {

  public bookDetails: VolumeInfo;
  public retriveRemoteInfoComplete: boolean;

  constructor(
    private remoteBookService: RemoteBookService,
    private modalRef: MatDialogRef<BookDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.retriveRemoteInfoComplete = false;

    this.bookDetails = {} as VolumeInfo;
    this.bookDetails.imageLinks = {} as VolumeInfo_ImageLinks;
    this.bookDetails.authors = [];
    this.bookDetails.categories = [] as string[];
    this.bookDetails.industryIdentifiers = [] as VolumeInfo_IndustryIdentifier[];
  }

  ngOnInit() {
    this.remoteBookService.getBook(this.data.bookID).subscribe(
      (res: GoogleBookResponse) => {
        this.bookDetails = res.volumeInfo;
        this.retriveRemoteInfoComplete = true;
        console.log(res);
      },
      error => console.log(error)
    );
  }

  closeModal() {
    this.modalRef.close();
  }
}
