import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'
import { Schedule } from '../../schedule/dto/schedule.type'

@InputType({ isAbstract: true })
@ObjectType()
export class User {
  @Field()
  id: string

  @IsString()
  @MaxLength(15)
  @MinLength(1)
  @Field({ nullable: false, description: 'minLength: 1, maxLength: 15' })
  firstName: string

  @IsString()
  @MaxLength(15)
  @MinLength(1)
  @Field({ nullable: false, description: 'minLength: 1, maxLength: 15' })
  lastName: string

  @IsEmail()
  @Field({ nullable: false })
  email: string

  @IsString()
  @Field({ nullable: false })
  phone: string

  @IsString()
  @MaxLength(30)
  @MinLength(6)
  @Field({ nullable: false, description: 'minLength: 6, maxLength: 30' })
  password: string

  @Field(() => Schedule, { nullable: true })
  schedule?: Schedule
}
