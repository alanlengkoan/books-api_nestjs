import {
    Column,
    CreatedAt,
    DataType,
    DeletedAt,
    IsUUID,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt
} from 'sequelize-typescript';

@Table
export class Books extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
    })
    year: number;

    @Column({
        type: DataType.STRING,
    })
    author: string;

    @Column({
        type: DataType.STRING,
    })
    summary: string;

    @Column({
        type: DataType.STRING,
    })
    publisher: string;

    @Column({
        type: DataType.INTEGER,
    })
    pageCount: number;

    @Column({
        type: DataType.INTEGER,
    })
    readPage: number;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}