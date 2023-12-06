import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class BookFormat {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    year: number;

    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    summary: string;

    @IsNotEmpty()
    publisher: string;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    pageCount: number;

    @IsNotEmpty()
    @IsInt()
    @Type(() => Number)
    readPage: number;
}