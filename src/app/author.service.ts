import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

const AUTHOR_URL = 'api/authors';

@Injectable()
export class AuthorService {
  constructor(private requestService: RequestService) {}

  getAuthors(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.requestService.get(AUTHOR_URL, httpOptions);
  }

  getAuthor(authorId): Observable<any> {
    return this.requestService.get(`${AUTHOR_URL}/${authorId}`);
  }

  createAuthor(authorId: any): Observable<any> {
    return this.requestService.post(`${AUTHOR_URL}/`, authorId);
  }

  updateAuthor(authorId: any): Observable<any> {
    return this.requestService.put(`${AUTHOR_URL}/`, authorId);
  }

  deleteAuthor(authorId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${AUTHOR_URL}/${authorId}`;
    return this.requestService.delete(url, httpOptions);
  }

}
