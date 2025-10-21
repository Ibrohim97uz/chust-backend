import { Test, TestingModule } from '@nestjs/testing';
import { AboutGovernmentService } from './about-government.service';

describe('AboutGovernmentService', () => {
  let service: AboutGovernmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutGovernmentService],
    }).compile();

    service = module.get<AboutGovernmentService>(AboutGovernmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
