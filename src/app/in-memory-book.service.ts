import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { AuthorTable } from './author-list/authors';
import { BookTable } from './book-list/books';

@Injectable()
export class InMemoryBookService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const db = {
      books: BookTable.books,
      authors: AuthorTable.authors
    };
    return db;
  }
}
