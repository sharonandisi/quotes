import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  goals = [
    // tslint:disable-next-line:max-line-length
    new Quote('Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring', 'Maryln Monroe' , ''),
    new Quote('Success is a lousy teacher. It seduces smart people into thinking they cant lose.', 'Bill Gates' , ''),
    new Quote('Design is not just what it looks like and feels like. Design is how it works.', 'Steve Jobs', ''),
  ];

  constructor() { }

  ngOnInit() {
  }

}
