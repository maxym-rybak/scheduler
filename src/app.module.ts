import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { join } from 'path'
import { ScheduleModule } from './schedule/schedule.module'
import { WorkTimeModule } from './work-time/work-time.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      // for schema first approach
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    AuthModule,
    ScheduleModule,
    WorkTimeModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
