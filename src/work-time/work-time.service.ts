import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateWorkTimeInput } from './dto/create-work-time.input'
import { PrismaService } from '../prisma.service'

@Injectable()
export class WorkTimeService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createWorkTimeInput: CreateWorkTimeInput, userId: string) {
    const schedule = await this.prismaService.schedule.findFirst({
      where: { ownerId: userId },
    })

    if (!schedule) {
      throw new BadRequestException('You need to create schedule first')
    }

    return this.prismaService.workTime.create({
      data: { ...createWorkTimeInput, scheduleId: schedule.id },
    })
  }
}
