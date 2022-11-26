import { Test, TestingModule } from '@nestjs/testing'
import { WorkTimeResolver } from './work-time.resolver'
import { WorkTimeService } from './work-time.service'

describe('WorkTimeResolver', () => {
  let resolver: WorkTimeResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkTimeResolver, WorkTimeService],
    }).compile()

    resolver = module.get<WorkTimeResolver>(WorkTimeResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
