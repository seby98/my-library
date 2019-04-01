import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoteBookService } from '../services/remote-book/remote-book.service';

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss']
})
export class BookDetailsModalComponent implements OnInit {

  public bookData;
  public isModalClose: boolean;

  constructor(
    private remoteBookService: RemoteBookService,
    private modalRef: MatDialogRef<BookDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.isModalClose = false;
  }

  ngOnInit() {
    this.remoteBookService.getBook(this.data.bookID).subscribe(
      bookData => this.bookData = bookData
    );
  }

  closeModal() {
    this.isModalClose = true;
    setTimeout(
      () => this.modalRef.close(),
      700
    );
    
  }

}
