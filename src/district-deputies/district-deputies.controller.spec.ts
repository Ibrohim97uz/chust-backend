import { Test, TestingModule } from '@nestjs/testing';
import { DistrictDeputiesController } from './district-deputies.controller';
import { DistrictDeputiesService } from './district-deputies.service';

describe('DistrictDeputiesController', () => {
  let controller: DistrictDeputiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistrictDeputiesController],
      providers: [DistrictDeputiesService],
    }).compile();

    controller = module.get<DistrictDeputiesController>(DistrictDeputiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
