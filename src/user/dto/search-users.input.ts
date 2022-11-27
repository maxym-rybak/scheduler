import { InputType, PartialType, PickType } from '@nestjs/graphql'
import { User } from './user.type'

@InputType()
export class SearchUsersInput extends PartialType(
  PickType(User, ['firstName', 'lastName', 'email', 'phone'] as const),
) {}
