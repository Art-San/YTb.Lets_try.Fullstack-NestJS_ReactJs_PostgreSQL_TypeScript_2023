import { Category } from './../../category/entities/category.entity'
import { User } from './../../user/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Transaction {
  @PrimaryColumn({ name: 'transaction_id' })
  //   @PrimaryGeneratedColumn({ name: 'transaction_id' })
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  type: number

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @Column()
  amount: number

  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
