import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ExpenseModule } from './expense/expense.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities/user.entity';
import { Category } from './category/category.entity';
import { Expense } from './expense/entity/expense.entity';

@Module({
  imports: [
    AuthModule,
    ExpenseModule,
    CategoryModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'FamilyCashManager',
      entities: [User ,Category , Expense],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Category, Expense]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
