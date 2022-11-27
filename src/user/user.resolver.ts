import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './dto/user.type'
import { UserCreateInput } from './dto/user-create.input'
import { UserUniqueFields, UserUpdateById } from './dto/user-update.input'
import { ForbiddenException, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { RolesGuard } from '../auth/guards/roles.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { SearchUsersInput } from './dto/search-users.input'
import { ScheduleService } from '../schedule/schedule.service'
import { Schedule } from '../schedule/dto/schedule.type'

@Resolver(User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly scheduleService: ScheduleService,
  ) {}

  @Query(() => User)
  async findUser(@Args('userUniqueFields') userUniqueFields: UserUniqueFields) {
    return this.userService.findOne(userUniqueFields)
  }

  @Query(() => [User])
  async findUsers(
    @Args('userUniqueFields') userUniqueFields: SearchUsersInput,
  ) {
    return this.userService.findMany(userUniqueFields)
  }

  @ResolveField('schedule', () => Schedule, { nullable: true })
  async user(@Parent() user: User) {
    const { id } = user
    return this.scheduleService.findOne(id)
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.userService.create(createUserInput)
  }

  @Roles('owner')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') userUpdateWhereUnique: UserUpdateById,
    @CurrentUser() user: User,
  ) {
    if (user && user.id === userUpdateWhereUnique.id) {
      return this.userService.update(
        userUpdateWhereUnique.id,
        userUpdateWhereUnique.data,
      )
    } else {
      throw new ForbiddenException()
    }
  }
}
