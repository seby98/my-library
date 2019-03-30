import { Component, OnInit, Input } from '@angular/core';
import { IBookItem } from '../interfaces/i-book-item';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() bookData: IBookItem;

  constructor() { }

  ngOnInit() {
  }

}
