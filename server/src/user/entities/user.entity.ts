import { Category } from 'src/category/entities/category.entity'
import { Transaction } from 'src/transaction/entities/transaction.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
@Entity()
// для таблица в базе данных
export class User {
  @PrimaryGeneratedColumn() // автоматом будет делать id
  id: number

  @Column()
  email: string

  @Column()
  password: string
  @OneToMany(() => Category, (category) => category.user, {
    onDelete: 'CASCADE' // если удалили юзера то и удал категорию
  })
  categories: Category[]

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    onDelete: 'CASCADE'
  })
  transactions: Transaction[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
