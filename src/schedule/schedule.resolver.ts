import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ScheduleService } from './schedule.service'
import { CreateScheduleInput } from './dto/create-schedule.input'
import { Schedule } from './dto/schedule.type'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { User } from '../user/dto/user.type'

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private readonly scheduleService: ScheduleService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Schedule)
  createSchedule(
    @Args('createScheduleInput') createScheduleInput: CreateScheduleInput,
    @CurrentUser() user: User,
  ) {
    return this.scheduleService.create(createScheduleInput, user)
  }

  // @Query(() => [Schedule])
  // findAll() {
  //   return this.scheduleService.findAll()
  // }
  //
  // @Query(() => Schedule)
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.scheduleService.findOne(id)
  // }
  //
  // @Mutation(() => Schedule)
  // removeWorkTime(@Args('id', { type: () => Int }) id: number) {
  //   return this.scheduleService.remove(id)
  // }
}
