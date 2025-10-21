import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyNewsService } from './emergency-news.service';

describe('EmergencyNewsService', () => {
  let service: EmergencyNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencyNewsService],
    }).compile();

    service = module.get<EmergencyNewsService>(EmergencyNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
