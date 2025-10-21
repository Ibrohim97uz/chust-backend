import { Test, TestingModule } from '@nestjs/testing';
import { CityNewsController } from './city-news.controller';
import { CityNewsService } from './city-news.service';

describe('CityNewsController', () => {
  let controller: CityNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityNewsController],
      providers: [CityNewsService],
    }).compile();

    controller = module.get<CityNewsController>(CityNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
