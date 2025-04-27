import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from './services/book.service';
import { Book } from '../interfaces/book.interfaces';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  books?: Book[];
  selectedBook?: Book;

  constructor(private bookService: BookService) {}

  // method to get the list of books
  // this method is called when the component is initialized
  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }

  // method to get the book details
  onSelectBook(bookId: number) {
    // call the service to get the book details
    this.selectedBook = this.bookService.bookDeatils(bookId);
    console.log(this.selectedBook);
  }
}
