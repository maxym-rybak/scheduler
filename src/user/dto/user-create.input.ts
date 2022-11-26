import { InputType, OmitType } from '@nestjs/graphql'
import { User } from './user.type'

@InputType()
export class UserCreateInput extends OmitType(User, ['id'] as const) {}
