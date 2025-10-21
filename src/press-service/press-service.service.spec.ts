import { Test, TestingModule } from '@nestjs/testing';
import { PressServiceService } from './press-service.service';

describe('PressServiceService', () => {
  let service: PressServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PressServiceService],
    }).compile();

    service = module.get<PressServiceService>(PressServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
