import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { sequelizeConfig } from './configs/sequelize.config';
import { HomeModule } from './home/home.module';

@Module({
  imports: [sequelizeConfig, HomeModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
