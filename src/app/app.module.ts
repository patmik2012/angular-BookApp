import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { InMemoryBookService } from './in-memory-book.service';
import { BookService } from './book.service';
import { BookCreateComponent } from './book-create/book-create.component';
import { AuthorService } from './author.service';
import { AuthorListComponent } from './author-list/author-list.component';
import { RequestService } from './request.service';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookstoreService } from './bookstore.service';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { BookstoreEditComponent } from './bookstore-edit/bookstore-edit.component';
import { BookstoreCreateComponent } from './bookstore-create/bookstore-create.component';
import { AuthorFilterPipe } from './pipes/author-filter.pipe';
import { BookstoreFilterPipe } from './pipes/bookstore-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService)
      : [],
    RouterModule.forRoot([
      { path: "", component: BookListComponent },
      { path: "books", component: BookListComponent },
      { path: "books/:bookId", component: BookDetailsComponent },
      { path: "createbook", component: BookCreateComponent },
      { path: "editbook/:bookId", component: BookEditComponent },
      { path: "authors", component: AuthorListComponent },
      { path: "createauthor", component: AuthorCreateComponent },
      { path: "editauthor/:authorId", component: AuthorEditComponent },
      { path: "bookstores", component: BookstoreListComponent },
      { path: "createbookstore", component: BookstoreCreateComponent },
      { path: "editbookstore/:bookstoreId", component: BookstoreEditComponent },
    ]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatButtonToggleModule /*
		MatMenuModule,
		MatSelectModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
    MatDividerModule*/
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCreateComponent,
    AuthorListComponent,
    BookFilterPipe,
    BookEditComponent,
    BookstoreListComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    BookstoreEditComponent,
    BookstoreCreateComponent,
    AuthorFilterPipe,
    BookstoreFilterPipe
  ],
  bootstrap: [AppComponent],
  providers: [InMemoryBookService, BookService, AuthorService, RequestService, BookstoreService]
})
export class AppModule {}
