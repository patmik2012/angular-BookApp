import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-social',
  templateUrl: './book-social.component.html',
  styleUrls: ['./book-social.component.css']
})
export class BookSocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  like(){
    console.log('Liked!');
  }

}