import { Test, TestingModule } from '@nestjs/testing';
import { AboutGovernmentController } from './about-government.controller';
import { AboutGovernmentService } from './about-government.service';

describe('AboutGovernmentController', () => {
  let controller: AboutGovernmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutGovernmentController],
      providers: [AboutGovernmentService],
    }).compile();

    controller = module.get<AboutGovernmentController>(AboutGovernmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
