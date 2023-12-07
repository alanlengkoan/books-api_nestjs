import {
    Injectable
} from '@nestjs/common';
import {
    v4 as uuidv4
} from 'uuid';
import {
    BookFormat
} from './dto/books.dto';
import {
    Books
} from './model/books.model';

@Injectable()
export class BooksService {
    async getAll(): Promise < Books[] > {
        const books = await Books.findAll();

        return books;
    }

    async create(data: BookFormat) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage
        } = data;

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

        try {
            await Books.create(book);

            return 'Success';
        } catch (error) {
            return error;
        }
    }

    async update(id: string, data: BookFormat) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage
        } = data;

        const book = {
            name: name,
            year: year,
            author: author,
            summary: summary,
            publisher: publisher,
            pageCount: pageCount,
            readPage: readPage,
        };

        try {
            const bookById = await Books.update(book, {
                where: {
                    id: id,
                },
            }, );

            return bookById;
        } catch (error) {
            return error;
        }

    }

    async delete(id: string) {
        const bookById = await Books.destroy({
            where: {
                id: id,
            }
        });

        return bookById;
    }

    async findById(id: string) {
        const bookById = Books.findAll({
            where: {
                id: id,
            }
        });

        if (bookById) {
            return bookById;
        } else {
            throw new Error('Book not found');
        }
    }
}