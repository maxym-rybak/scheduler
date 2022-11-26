import { InputType, OmitType } from '@nestjs/graphql'
import { Schedule } from './schedule.type'

@InputType()
export class CreateScheduleInput extends OmitType(Schedule, [
  'id',
  'workTimes',
] as const) {}
