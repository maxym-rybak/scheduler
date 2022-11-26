import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql'

@InputType({ isAbstract: true })
@ObjectType()
export class WorkTime {
  @Field(() => Int)
  id: number

  @Field(() => GraphQLISODateTime)
  start: Date

  @Field(() => GraphQLISODateTime)
  end: Date
}
