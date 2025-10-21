import { Test, TestingModule } from '@nestjs/testing';
import { UsefulCitiesController } from './useful-cities.controller';
import { UsefulCitiesService } from './useful-cities.service';

describe('UsefulCitiesController', () => {
  let controller: UsefulCitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsefulCitiesController],
      providers: [UsefulCitiesService],
    }).compile();

    controller = module.get<UsefulCitiesController>(UsefulCitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
