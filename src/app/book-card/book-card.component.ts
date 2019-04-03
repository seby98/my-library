import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../interfaces/book-item';
import { MatDialog } from '@angular/material';
import { BookDetailsModalComponent } from '../book-details-modal/book-details-modal.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() bookData: BookItem;

  constructor(private modal: MatDialog) { }

  ngOnInit() {
  }

  openBookDetailsModal () {
    this.modal.open(BookDetailsModalComponent, {
      width: '300px',
      data: {bookID: this.bookData.id}
    });
  }
}
