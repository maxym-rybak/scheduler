import { Injectable } from '@nestjs/common'
import { CreateScheduleInput } from './dto/create-schedule.input'
import { PrismaService } from '../prisma.service'
import { User } from '../user/dto/user.type'

@Injectable()
export class ScheduleService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createScheduleInput: CreateScheduleInput, user: User) {
    return this.prismaService.schedule.create({
      data: { ...createScheduleInput, userId: user.id },
    })
  }

  findAll() {
    return `This action returns all workTime`
  }

  findOne(id: number) {
    return `This action returns a #${id} workTime`
  }

  remove(id: number) {
    return `This action removes a #${id} workTime`
  }
}
