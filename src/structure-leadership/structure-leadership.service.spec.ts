import { Test, TestingModule } from '@nestjs/testing';
import { StructureLeadershipService } from './structure-leadership.service';

describe('StructureLeadershipService', () => {
  let service: StructureLeadershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructureLeadershipService],
    }).compile();

    service = module.get<StructureLeadershipService>(StructureLeadershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
