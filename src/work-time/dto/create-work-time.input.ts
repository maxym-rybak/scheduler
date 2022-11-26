import { InputType, OmitType } from '@nestjs/graphql'
import { WorkTime } from './work-time.type'

@InputType()
export class CreateWorkTimeInput extends OmitType(WorkTime, ['id']) {}
