import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './services/book.service';

@NgModule({
  imports: [
    CommonModule,
    BookListComponent,
    BookDetailComponent,
    RouterModule.forChild([
      { path: '', component: BookListComponent },
      { path: ':id', component: BookDetailComponent },
    ]),
  ],
  providers: [BookService],
})
export class BookModule {}
