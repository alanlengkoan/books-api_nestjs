import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { HomeController } from './home/home.controller';
import { sequelizeConfig } from './configs/sequelize.config';

@Module({
  imports: [sequelizeConfig, BooksModule],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
