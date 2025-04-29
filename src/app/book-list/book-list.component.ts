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

  constructor(private bookService: BookService) {}

  ngOnInit() {
    /*
    @description: this to get the list of books from the book service
    */
    this.books = this.bookService.getAllBooks();
  }
}
