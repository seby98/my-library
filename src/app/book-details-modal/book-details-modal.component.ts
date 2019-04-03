import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoteBookService } from '../services/remote-book/remote-book.service';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-book-details-modal',
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.scss'],
  animations: [
    trigger('openClose', [
      state('close', style({
        opacity: 0,
        transform: 'scale(0.2)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('open=>close', [animate('10000ms')]),
      transition('close=>open', [animate('2000ms')])
    ])
  ]
})
export class BookDetailsModalComponent implements OnInit {

  public bookData;
  //public isModalClose: boolean;
  public currentState: string;

  constructor(
    private remoteBookService: RemoteBookService,
    private modalRef: MatDialogRef<BookDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    //this.isModalClose = false;
    this.currentState = "open";
  }

  ngOnInit() {
    this.remoteBookService.getBook(this.data.bookID).subscribe(
      bookData => this.bookData = bookData
    );
  }

  closeModal() {
    //this.isModalClose = !this.isModalClose;
    /*setTimeout(
      () => this.modalRef.close(),
      700
    );*/
    this.currentState = "close";
    this.modalRef.close()
    
  }

}
