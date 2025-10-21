import { Test, TestingModule } from '@nestjs/testing';
import { PublicCouncilService } from './public-council.service';

describe('PublicCouncilService', () => {
  let service: PublicCouncilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicCouncilService],
    }).compile();

    service = module.get<PublicCouncilService>(PublicCouncilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
