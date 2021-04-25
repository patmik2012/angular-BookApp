import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { BookListComponent } from './book-list/book-list.component';
import { BookSocialComponent } from './book-social/book-social.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { InMemoryBookService } from './in-memory-book.service';
import { BookService } from './book.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule,
  RouterModule.forRoot([
      { path: '', component: BookListComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:bookId', component:BookDetailsComponent },
    ]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule/*,
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
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
    MatDividerModule*/ ],
  declarations: [ AppComponent, HelloComponent, BookListComponent, BookSocialComponent, BookDetailsComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryBookService, BookService]
})
export class AppModule { }
