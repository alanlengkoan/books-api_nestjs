import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
} from '@nestjs/common';
import {
    ValidationPipe
} from '@nestjs/common';
import {
    BooksService
} from './books.service';
import {
    BookFormat
} from './dto/books.dto';

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
    @UsePipes(ValidationPipe)
    createBook(
        @Body() payLoad: BookFormat
    ) {
        return this.booksService.create(payLoad);
    }

    @Put(':id')
    @UsePipes(ValidationPipe)
    updateBook(
        @Param('id') id: string, @Body() payLoad: BookFormat
    ) {
        return this.booksService.update(id, payLoad);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string) {
        return this.booksService.delete(id);
    }
}