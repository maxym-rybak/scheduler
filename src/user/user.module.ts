import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { PrismaService } from '../prisma.service'
import { ScheduleModule } from '../schedule/schedule.module'

@Module({
  imports: [ScheduleModule],
  providers: [UserResolver, UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
