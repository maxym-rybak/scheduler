import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { IsString, MaxLength, MinLength } from 'class-validator'
import { WorkTime } from '../../work-time/dto/work-time.type'
import { User } from '../../user/dto/user.type'

@InputType({ isAbstract: true })
@ObjectType()
export class Schedule {
  @Field(() => Int)
  id: number

  @IsString()
  @MaxLength(25)
  @MinLength(1)
  @Field({ nullable: false, description: 'minLength: 1, maxLength: 25' })
  name: string

  @Field(() => User)
  owner: User

  @Field(() => [WorkTime], { nullable: true })
  workTimes?: WorkTime[]
}
