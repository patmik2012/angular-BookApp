import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthorService } from '../author.service';
import { BookService } from "../book.service";
import { DeletedService } from '../deleted.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private deletedService: DeletedService
  ) {}

  filterargs = {
    id: '',
    name: '',
    birth: '',
    nationality: ''
  };

  selectedSorting = 'id';
  authors$: Observable<any>;
  isvalid;

  ngOnInit() {
    this.authors$ = this.authorService.getAuthors();
  }

  onDeleteAuthor(id, name) {
    this.bookService.getBooks()
      .pipe(map(books => books.filter(book => book.author === name)))
      .subscribe(result => {
        if (result.length === 0) {
          this.authorService
            .getAuthor(id)
            .subscribe(result =>
              this.deletedService.createDeleted(result).subscribe()
            );

          this.authorService.deleteAuthor(id)
            .pipe(
              switchMap(
                res => (this.authors$ = this.authorService.getAuthors())
              )
            )
            .subscribe();
        } else {
          alert("This author has books!");
        }
      });      
  }

  onSort() {
    this.authors$ = this.authors$.pipe(
      map(authors =>
        authors.sort((a, b) =>
          a[this.selectedSorting] < b[this.selectedSorting] ? -1 : 1
        )
      )
    );
  }
}
