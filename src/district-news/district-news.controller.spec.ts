import { Test, TestingModule } from '@nestjs/testing';
import { DistrictNewsController } from './district-news.controller';
import { DistrictNewsService } from './district-news.service';

describe('DistrictNewsController', () => {
  let controller: DistrictNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictNewsController],
      providers: [DistrictNewsService],
    }).compile();

    controller = module.get<DistrictNewsController>(DistrictNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
