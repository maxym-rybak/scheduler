import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './dto/user.type'
import { UserCreateInput } from './dto/user-create.input'
import { UserUniqueFields, UserUpdateById } from './dto/user-update.input'
import { ForbiddenException, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { Roles } from '../auth/decorators/roles.decorator'
import { RolesGuard } from '../auth/guards/roles.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator'

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findOne(@Args('userUniqueFields') userUniqueFields: UserUniqueFields) {
    return this.userService.findOne(userUniqueFields)
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
