import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAll(): any {
    return this.books;
  }

  create(
    name: string,
    year: number,
    author: string,
    summary: string,
    publisher: string,
    pageCount: number,
    readPage: number,
  ) {
    const book = {
      id: uuidv4(),
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
    };
    this.books.push(book);
  }

  update(
    id: string,
    name: string,
    year: number,
    author: string,
    summary: string,
    publisher: string,
    pageCount: number,
    readPage: number,
  ) {
    const bookById = this.findById(id);
    bookById.name = name;
    bookById.year = year;
    bookById.author = author;
    bookById.summary = summary;
    bookById.publisher = publisher;
    bookById.pageCount = pageCount;
    bookById.readPage = readPage;

    return bookById;
  }

  delete(id: string) {
    const bookById = this.findById(id);
    this.books.splice(bookById, 1);
  }

  findById(id: string) {
    const bookById = this.books.find((book) => book.id === id);
    if (bookById) {
      return bookById;
    } else {
      throw new Error('Book not found');
    }
  }
}
