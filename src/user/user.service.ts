import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { Prisma } from '@prisma/client'
import { UserUniqueFields } from './dto/user-update.input'
import { User } from './dto/user.type'
import { SearchUsersInput } from './dto/search-users.input'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: createUserInput })
  }

  async findOne(where: UserUniqueFields) {
    return this.prismaService.user.findFirst({
      where,
    })
  }
  async findMany(where: SearchUsersInput) {
    return this.prismaService.user.findMany({
      where,
    })
  }

  update(
    id: string,
    data: Prisma.UserUpdateInput,
  ): Prisma.Prisma__UserClient<User> {
    return this.prismaService.user.update({
      where: { id },
      data,
    })
  }
}
