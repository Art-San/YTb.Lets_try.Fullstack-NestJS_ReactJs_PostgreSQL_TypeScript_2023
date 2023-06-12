import { Category } from './entities/category.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { Transaction } from 'src/transaction/entities/transaction.entity'
import { TransactionService } from 'src/transaction/transaction.service'

@Module({
  imports: [TypeOrmModule.forFeature([Category, Transaction])], // небыло подключено Transaction была эта ошибка 23:12:46   ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'findOne')
  controllers: [CategoryController],
  providers: [CategoryService, TransactionService] // небыло подключено TransactionService была эта ошибка 23:12:46   ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'findOne')
})
export class CategoryModule {}
