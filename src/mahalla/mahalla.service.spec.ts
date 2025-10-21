import { Test, TestingModule } from '@nestjs/testing';
import { MahallaService } from './mahalla.service';

describe('MahallaService', () => {
  let service: MahallaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MahallaService],
    }).compile();

    service = module.get<MahallaService>(MahallaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
