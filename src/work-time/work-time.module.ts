import { Module } from '@nestjs/common'
import { WorkTimeService } from './work-time.service'
import { WorkTimeResolver } from './work-time.resolver'
import { PrismaService } from '../prisma.service'

@Module({
  providers: [WorkTimeResolver, WorkTimeService, PrismaService],
})
export class WorkTimeModule {}
