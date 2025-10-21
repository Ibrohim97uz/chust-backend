import { Test, TestingModule } from '@nestjs/testing';
import { PressServiceController } from './press-service.controller';
import { PressServiceService } from './press-service.service';

describe('PressServiceController', () => {
  let controller: PressServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PressServiceController],
      providers: [PressServiceService],
    }).compile();

    controller = module.get<PressServiceController>(PressServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
