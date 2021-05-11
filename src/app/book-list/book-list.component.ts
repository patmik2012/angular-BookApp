import { inputNames } from '@angular/cdk/schematics';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
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

  
  sortedData:BookTable[];
  

  constructor(private bookService: BookService,
  ) { }

  books$: Observable<any>;
  books;
  //datasource=new MatTableDataSource() ;
  

  sortData(sort: Sort) {
    const data = this.books;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'author': return compare(a.author, b.author, isAsc);
        default: return 0;
      }
    });
  }

  ngOnInit() {
    //this.datasource=this.books;  
    //this.datasource=BookTable.books;
    this.books$ = this.bookService.getBooks();

    this.books$.subscribe(result => { 
    this.books = result;
    });

  }
  

  
  liked($event){
    alert($event);
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}