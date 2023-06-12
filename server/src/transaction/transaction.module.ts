import { Module } from '@nestjs/common'
import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Transaction } from './entities/transaction.entity'
import { Category } from 'src/category/entities/category.entity'
import { CategoryService } from 'src/category/category.service'

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Category])], // небыло подключено Category была эта ошибка 23:12:46   ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'findOne')
  controllers: [TransactionController],
  providers: [TransactionService, CategoryService] // небыло подключено CategoryService была эта ошибка 23:12:46
})
export class TransactionModule {}
