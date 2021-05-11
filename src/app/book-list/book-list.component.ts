import { inputNames } from '@angular/cdk/schematics';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from '../book.service';
import { BookTable } from './books';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  constructor(private bookService: BookService,
  ) { }

  filterargs = {
    id: "",
    isbn: "",
    title: "",
    author: "",
    published: "",
    pages: ""
  };

  selectedSorting = "id";
  books$: Observable<any>;
  books;
  
  ngOnInit() {
    this.books$ = this.bookService
      .getBooks().pipe();
    }

  
  
  onSort() {
    this.books$ = this.books$.pipe(
      map(books =>
        books.sort((a, b) =>
          a[this.selectedSorting] < b[this.selectedSorting] ? -1 : 1
        )
      )
    );
  }
}