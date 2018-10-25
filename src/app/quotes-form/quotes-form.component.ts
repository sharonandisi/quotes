import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {
  newquote = new Quote('', '', new Date(), 0, 0);
  @Output() addquote = new EventEmitter<Quote>();

  submitQuote() {
    this.addquote.emit(this.newquote);
    this.newquote = new Quote('', '', new Date(), 0, 0);
  }


  constructor() { }

  ngOnInit() {

  }

}
