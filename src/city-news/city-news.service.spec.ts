import { Test, TestingModule } from '@nestjs/testing';
import { CityNewsService } from './city-news.service';

describe('CityNewsService', () => {
  let service: CityNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityNewsService],
    }).compile();

    service = module.get<CityNewsService>(CityNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
