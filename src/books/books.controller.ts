import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.booksService.findById(id);
  }

  @Post()
  createBook(
    @Body('name') name: string,
    @Body('year') year: number,
    @Body('author') author: string,
    @Body('summary') summary: string,
    @Body('publisher') publisher: string,
    @Body('pageCount') pageCount: number,
    @Body('readPage') readPage: number,
  ) {
    return this.booksService.create(
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
    );
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('year') year: number,
    @Body('author') author: string,
    @Body('summary') summary: string,
    @Body('publisher') publisher: string,
    @Body('pageCount') pageCount: number,
    @Body('readPage') readPage: number,
  ) {
    return this.booksService.update(
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
    );
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
