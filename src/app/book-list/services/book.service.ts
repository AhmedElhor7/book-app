import { Injectable } from '@angular/core';
import { Book } from '../../interfaces/book.interfaces';
import { DUMMY_BOOKS } from '../../shared/dummy-data/dummy-books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = DUMMY_BOOKS;

  /*
  @description: this to get the list of books from the book service
  @param: none
  @return: Book[]
  */
  getAllBooks(): Book[] {
    return this.books;
  }

  // method to get the book details
  /*
  @description: this to get the book details from the book service
  @param: bookId: number
  @return: spacific book details
  */
  bookDeatils(bookId: number): Book | undefined {
    return this.books.find((book) => book.id === bookId);
  }
}
