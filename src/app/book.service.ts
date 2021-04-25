import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const BOOK_URL = "api/books";

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(BOOK_URL);
  }

  getBook(bookId): Observable<any> {
    return this.http.get(`${BOOK_URL}/${bookId}`);
  }
}
