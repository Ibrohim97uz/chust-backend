import { Test, TestingModule } from '@nestjs/testing';
import { UsefulAppsService } from './useful-apps.service';

describe('UsefulAppsService', () => {
  let service: UsefulAppsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsefulAppsService],
    }).compile();

    service = module.get<UsefulAppsService>(UsefulAppsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
