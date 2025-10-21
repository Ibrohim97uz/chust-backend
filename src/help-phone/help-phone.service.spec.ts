import { Test, TestingModule } from '@nestjs/testing';
import { HelpPhoneService } from './help-phone.service';

describe('HelpPhoneService', () => {
  let service: HelpPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpPhoneService],
    }).compile();

    service = module.get<HelpPhoneService>(HelpPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
