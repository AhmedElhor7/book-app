import { Book } from '../../interfaces/book.interfaces';

// This file contains dummy data for books to be used in the application.
export const DUMMY_BOOKS: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description:
      'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
    publishedYear: 1925,
    price: 12.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Classic Literature',
    rating: 4.5,
    pages: 180,
    language: 'English',
    publisher: 'Scribner',
    isbn: '978-0743273565',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'The story of racial injustice and the loss of innocence in the American South.',
    publishedYear: 1960,
    price: 14.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Classic Literature',
    rating: 4.8,
    pages: 336,
    language: 'English',
    publisher: 'Grand Central Publishing',
    isbn: '978-0446310789',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    description:
      'A dystopian social science fiction novel and cautionary tale.',
    publishedYear: 1949,
    price: 11.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Science Fiction',
    rating: 4.6,
    pages: 328,
    language: 'English',
    publisher: 'Signet Classic',
    isbn: '978-0451524935',
  },
  {
    id: 4,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description:
      'The adventure of Bilbo Baggins, a hobbit who embarks on a quest to help a group of dwarves reclaim their mountain home.',
    publishedYear: 1937,
    price: 15.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
    genre: 'Fantasy',
    rating: 4.7,
    pages: 310,
    language: 'English',
    publisher: 'Houghton Mifflin Harcourt',
    isbn: '978-0547928227',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description:
      'A romantic novel of manners that follows the emotional development of Elizabeth Bennet.',
    publishedYear: 1813,
    price: 9.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg',
    genre: 'Romance',
    rating: 4.7,
    pages: 432,
    language: 'English',
    publisher: 'Penguin Classics',
    isbn: '978-0141439518',
  },
  {
    id: 6,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description:
      'A story about the struggles of a disillusioned teenager named Holden Caulfield.',
    publishedYear: 1951,
    price: 13.99,
    imageUrl:
      'https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UL436_QL65_.jpg',
    genre: 'Fiction',
    rating: 4.0,
    pages: 277,
    language: 'English',
    publisher: 'Little, Brown and Company',
    isbn: '978-0316769488',
  },
];
