import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const BOOK_URL = 'api/books';

@Injectable()
export class BookService {
  constructor(private requestService: RequestService) {}

  getBooks(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(BOOK_URL);
  }

  getBook(bookId): Observable<any> {
    return this.requestService.get(`${BOOK_URL}/${bookId}`);
  }

  createBook(bookId: any): Observable<any> {
    return this.requestService.post(`${BOOK_URL}/`, bookId);
  }

  updateBook(bookId: any): Observable<any> {
    return this.requestService.put(`${BOOK_URL}/`, bookId);
  }

  deleteBook(bookId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${BOOK_URL}/${bookId}`;
    return this.requestService.delete(url, httpOptions);
  }
}
