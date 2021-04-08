import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-social',
  templateUrl: './book-social.component.html',
  styleUrls: ['./book-social.component.css']
})
export class BookSocialComponent implements OnInit {

  @Input('bk') book;

  constructor() { }

  ngOnInit() {
  }

  like(){
    console.log('Like: '+ this.book.likes);
  }

}