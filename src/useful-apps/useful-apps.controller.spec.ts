import { Test, TestingModule } from '@nestjs/testing';
import { UsefulAppsController } from './useful-apps.controller';
import { UsefulAppsService } from './useful-apps.service';

describe('UsefulAppsController', () => {
  let controller: UsefulAppsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsefulAppsController],
      providers: [UsefulAppsService],
    }).compile();

    controller = module.get<UsefulAppsController>(UsefulAppsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
