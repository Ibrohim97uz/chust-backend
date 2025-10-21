import { Test, TestingModule } from '@nestjs/testing';
import { UsefulCitiesService } from './useful-cities.service';

describe('UsefulCitiesService', () => {
  let service: UsefulCitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsefulCitiesService],
    }).compile();

    service = module.get<UsefulCitiesService>(UsefulCitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
