import { Transaction } from './entities/transaction.entity'
import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { Repository } from 'typeorm'

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>
  ) {}
  async create(createTransactionDto: CreateTransactionDto, id: number) {
    const newTransaction = {
      title: createTransactionDto.title,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
      category: { id: +createTransactionDto.category },
      user: { id }
    }
    if (!newTransaction)
      throw new BadRequestException(
        'Somethins went wrong. Ошибка из transaction.service create'
      )

    return await this.transactionRepository.save(newTransaction)
  }

  async findAll(id: number) {
    const transactions = await this.transactionRepository.find({
      where: {
        user: { id }
      },
      order: {
        createdAt: 'DESC' // сортировка последнии первые
      }
    })
    // console.log(transactions)
    return transactions
  }

  async findOne(id: number) {
    const transaction = await this.transactionRepository.findOne({
      where: { id },
      relations: {
        // подтянется инфа о юзере и категории
        user: true,
        category: true
      }
    })
    if (!transaction)
      throw new NotFoundException(
        'Transaction not found, Ошибка из transaction.service findOne'
      )
    return transaction
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const transaction = await this.transactionRepository.findOne({
      where: { id }
    })
    if (!transaction)
      throw new NotFoundException(
        'Transaction not found. Ошибка из transaction.service update'
      )
    return await this.transactionRepository.update(id, updateTransactionDto)
  }

  async remove(id: number) {
    const transaction = await this.transactionRepository.findOne({
      where: { id }
    })
    if (!transaction)
      throw new NotFoundException(
        'Transaction not found. Ошибка из transaction.service remove '
      )
    return await this.transactionRepository.delete(id)
  }

  async findAllWithPagination(id: number, page: number, limit: number) {
    const transactions = await this.transactionRepository.find({
      where: {
        user: { id }
      },
      relations: {
        // много лишней инфы
        category: true,
        user: {
          transactions: true
        }
      },
      order: {
        createdAt: 'DESC'
      },
      take: limit, // бери только количество определенное лимитом
      skip: (page - 1) * limit // при переключение страницы пропустьть нужное количество
    })
    return transactions
  }

  async findAllByType(id: number, type: string) {
    const transactions = await this.transactionRepository.find({
      where: {
        user: { id },
        type
      }
    })

    const total = transactions.reduce((acc, obj) => acc + obj.amount, 0)
    return total
  }
}

// 26:38
