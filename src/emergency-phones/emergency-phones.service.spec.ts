import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyPhonesService } from './emergency-phones.service';

describe('EmergencyPhonesService', () => {
  let service: EmergencyPhonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergencyPhonesService],
    }).compile();

    service = module.get<EmergencyPhonesService>(EmergencyPhonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
