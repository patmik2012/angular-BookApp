import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-social',
  templateUrl: './book-social.component.html',
  styleUrls: ['./book-social.component.css']
})
export class BookSocialComponent implements OnInit {

  @Input('bk') book;
  @Output() onlike = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  like(){
    console.log('Like: '+ this.book.likes);
    this.onlike.emit(this.book.likes+1);
  }

}