import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { Observable, Observer, fromEvent,ReplaySubject } from 'rxjs';
import { mergeMap, map,startWith,debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
books=
[
    {
      "id": 1,
      "title": "Első könyv",
      "authorId": 1,
      "pubished": 2011,
      "pages": 345,
      "ISBN": "2352145234"
    },
    {
      "id": 2,
      "title": "Második könyv",
      "authorId": 1,
      "published": 2010,
      "pages": 532,
      "ISBN": "12355326312"
    },
    {
      "id": 3,
      "title": "Harmadik könyv",
      "authorId": 2,
      "published": 2003, 
      "pages": 147,
      "ISBN": "635234265623"
    }
  ]

  name = 'Angular';
}
