import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTHOR_URL = 'api/authors';

@Injectable()
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<any> {
    return this.http.get(AUTHOR_URL);
  }

  getBook(AuthorId): Observable<any> {
    return this.http.get(`${AUTHOR_URL}/${AuthorId}`);
  }
}
