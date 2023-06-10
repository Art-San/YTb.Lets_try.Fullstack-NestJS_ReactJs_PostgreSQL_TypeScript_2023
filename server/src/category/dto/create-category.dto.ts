import { User } from './../../user/entities/user.entity'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateCategoryDto {
  @IsNotEmpty() // это поле не должно быть пустым
  title: string
  @IsOptional()
  user?: User
}
