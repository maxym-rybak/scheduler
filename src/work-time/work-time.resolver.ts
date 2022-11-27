import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { WorkTimeService } from './work-time.service'
import { CreateWorkTimeInput } from './dto/create-work-time.input'
// import { UpdateScheduleInput } from './dto/update-work-time.input'
import { WorkTime } from './dto/work-time.type'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { User } from '../user/dto/user.type'

@Resolver(() => WorkTime)
export class WorkTimeResolver {
  constructor(private readonly workTimeService: WorkTimeService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => WorkTime)
  createWorkTime(
    @Args('createWorkTimeInput') createWorkTimeInput: CreateWorkTimeInput,
    @CurrentUser() user: User,
  ) {
    return this.workTimeService.create(createWorkTimeInput, user.id)
  }

  // @Query(() => [WorkTime])
  // findAll() {
  //   return this.workTimeService.findAll()
  // }
  //
  // @Query(() => WorkTime)
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.workTimeService.findOne(id)
  // }

  // @Mutation(() => WorkTime)
  // updateWorkTime(
  //   @Args('updateWorkTimeInput') updateWorkTimeInput: UpdateScheduleInput,
  // ) {
  //   return this.workTimeService.update(
  //     updateWorkTimeInput.id,
  //     updateWorkTimeInput,
  //   )
  // }

  // @Mutation(() => WorkTime)
  // removeWorkTime(@Args('id', { type: () => Int }) id: number) {
  //   return this.workTimeService.remove(id)
  // }
}
