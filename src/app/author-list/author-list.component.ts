import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  constructor(private authorService: AuthorService) {}

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

  onDeleteAuthors(id, name) {}

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
