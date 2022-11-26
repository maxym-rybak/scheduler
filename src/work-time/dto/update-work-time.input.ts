import { CreateWorkTimeInput } from './create-work-time.input'
import { InputType, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateWorkTimeInput extends PartialType(CreateWorkTimeInput) {}
