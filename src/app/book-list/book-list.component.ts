import { inputNames } from '@angular/cdk/schematics';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { BookTable } from './books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
/*  
books=
[
    {
      "id": 1,
      "title": "Első könyv",
      "authorId": 1,
      "published": 2011,
      "pages": 345,
      "ISBN": "2352145234",
      "likes":32
    },
    {
      "id": 2,
      "title": "Második könyv",
      "authorId": 1,
      "published": 2010,
      "pages": 532,
      "ISBN": "12355326312",
      "likes":23
    },
    {
      "id": 3,
      "title": "Harmadik könyv",
      "authorId": 2,
      "published": 2003, 
      "pages": 147,
      "ISBN": "635234265623",
      "likes":12
    }
  ]
  */
  


  constructor(private bookService: BookService) { }

  books$: Observable<any>;
  books;
  datasource=new MatTableDataSource() ;
  
  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.datasource=this.books;  
    //this.datasource=BookTable.books;
    this.books$.subscribe(result => { 
    this.books = result;
    });

  }
  
  liked($event){
    alert($event);
  }

}