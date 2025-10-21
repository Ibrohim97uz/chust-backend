import { Test, TestingModule } from '@nestjs/testing';
import { HelloChustService } from './hello-chust.service';

describe('HelloChustService', () => {
  let service: HelloChustService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloChustService],
    }).compile();

    service = module.get<HelloChustService>(HelloChustService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
