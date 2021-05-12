import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const BOOKSTORE_URL = 'api/bookstores';

@Injectable()
export class BookstoreService {
  constructor(private requestService: RequestService) {}

  getBookstores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get(BOOKSTORE_URL, httpOptions);
  }

  getBookstore(bookstoreId): Observable<any> {
    return this.requestService.get(`${BOOKSTORE_URL}/${bookstoreId}`);
  }

  createBookstore(bookstoreId: any): Observable<any> {
    return this.requestService.post(`${BOOKSTORE_URL}/`, bookstoreId);
  }

  updateBookstore(bookstoreId: any): Observable<any> {
    return this.requestService.put(`${BOOKSTORE_URL}/`, bookstoreId);
  }

  deleteBookstore(bookstoreId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${BOOKSTORE_URL}/${bookstoreId}`;
    return this.requestService.delete(url, httpOptions);
  }
}
