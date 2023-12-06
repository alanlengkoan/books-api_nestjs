import { SequelizeModule } from '@nestjs/sequelize';
import { Books } from 'src/books/model/books.model';

export const sequelizeConfig = SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'my_root',
    password: 'my_pass',
    database: 'learn_nestjs',
    // autoLoadModels: true,
    // synchronize: true,
    models: [
        Books
    ],
})