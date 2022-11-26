import { InputType, PickType } from '@nestjs/graphql'
import { User } from '../../user/dto/user.type'

@InputType()
export class AuthLoginInput extends PickType(User, [
  'email',
  'password',
] as const) {}
