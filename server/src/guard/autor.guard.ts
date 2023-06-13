import { CategoryService } from './../category/category.service'
import { TransactionService } from './../transaction/transaction.service'
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException
} from '@nestjs/common'

// небыло @Injectable() была эта ошибка 23:12:46   ERROR [ExceptionsHandler] Cannot read properties of undefined (reading 'findOne')
@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly categoryService: CategoryService
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const { id, type } = request.params

    let entity

    switch (type) {
      case 'transaction':
        entity = await this.transactionService.findOne(id)
        break
      case 'category':
        entity = await this.categoryService.findOne(id)
        break

      default:
        throw new NotFoundException('Ошибка эта в autor.guard, в блоке switch')
    }

    const user = request.user

    if (entity && user && entity.user.id === user.id) {
      return true
    }
    throw new BadRequestException(
      'Данные не твои, не лезь. Ошибка эта из autor.guard'
    )
    // return false
  }
}

// 21:20
