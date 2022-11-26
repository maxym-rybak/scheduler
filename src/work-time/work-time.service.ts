import { Injectable } from '@nestjs/common'
import { CreateWorkTimeInput } from './dto/create-work-time.input'
import { PrismaService } from '../prisma.service'
// import { UpdateScheduleInput } from './dto/update-work-time.input'

@Injectable()
export class WorkTimeService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createWorkTimeInput: CreateWorkTimeInput) {
    // return this.prismaService.workTime.create(createWorkTimeInput)
    return 'ss'
  }

  findAll() {
    return `This action returns all workTime`
  }

  findOne(id: number) {
    return `This action returns a #${id} workTime`
  }

  // update(id: number, updateWorkTimeInput: UpdateScheduleInput) {
  //   return `This action updates a #${id} workTime`
  // }

  remove(id: number) {
    return `This action removes a #${id} workTime`
  }
}
