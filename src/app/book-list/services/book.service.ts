import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book.interfaces';
import { DUMMY_BOOKS } from '../../shared/dummy-data/dummy-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = DUMMY_BOOKS;

  // method to get all the books
  getAllBooks(): Book[] {
    return this.books;
  }

  // method to get the book details
  bookDeatils(bookId: number) {
    return this.books.find((book) => book.id === bookId);
  }
}
