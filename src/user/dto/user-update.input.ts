import {
  Field,
  InputType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql'
import { User } from './user.type'

@InputType()
export class UserUpdateInput extends OmitType(PartialType(User), [
  'id',
] as const) {}

@InputType()
export class UserUniqueFields extends PartialType(
  PickType(User, ['id', 'email', 'phone'] as const),
) {}

@InputType()
export class UserUpdateById {
  @Field()
  id: string

  @Field()
  data: UserUpdateInput
}
