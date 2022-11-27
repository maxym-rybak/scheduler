import { Injectable } from '@nestjs/common'
import { CreateScheduleInput } from './dto/create-schedule.input'
import { PrismaService } from '../prisma.service'
import { User } from '../user/dto/user.type'

@Injectable()
export class ScheduleService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createScheduleInput: CreateScheduleInput, user: User) {
    return this.prismaService.schedule.create({
      data: { ...createScheduleInput, ownerId: user.id },
    })
  }

  findOne(ownerId: string) {
    return this.prismaService.schedule.findFirst({
      where: {
        ownerId,
      },
    })
  }
}
