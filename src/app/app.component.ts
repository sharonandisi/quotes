import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  quotes = [
    // tslint:disable-next-line:max-line-length
    new Quote('Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring' , 'Marilyn monroe' , new Date(), 0, 0),
    new Quote('Success is a lousy teacher. It seduces smart people into thinking they cant lose.', 'Bill Gates' , new Date(), 0, 0),
    new Quote('Design is not just what it looks like and feels like. Design is how it works.', 'Steve Jobs', new Date(), 0, 0),
  ];
}
