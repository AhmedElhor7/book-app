import { Book } from './../../interfaces/book.interfaces';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  books?: Book[];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {
    // subscribe to the route params to get the book id from the url
    this.route.params.subscribe((params) => {
      // get the book id from the url params and convert it to a number
      const bookId = +params['id'];
      // call the service to get the book details
      const bookDetail = this.bookService.bookDeatils(bookId);
      // console.log(bookDetail);
      // books is an array of book objects, so we need to check if bookDetail is not undefined
      this.books = bookDetail ? [bookDetail] : undefined;
    });
  }
}
