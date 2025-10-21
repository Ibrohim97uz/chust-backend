import { Test, TestingModule } from '@nestjs/testing';
import { DistrictNewsService } from './district-news.service';

describe('DistrictNewsService', () => {
  let service: DistrictNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistrictNewsService],
    }).compile();

    service = module.get<DistrictNewsService>(DistrictNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
