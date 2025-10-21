import { Test, TestingModule } from '@nestjs/testing';
import { DistrictDeputiesService } from './district-deputies.service';

describe('DistrictDeputiesService', () => {
  let service: DistrictDeputiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistrictDeputiesService],
    }).compile();

    service = module.get<DistrictDeputiesService>(DistrictDeputiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
