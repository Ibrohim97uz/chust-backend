import { Test, TestingModule } from '@nestjs/testing';
import { VisualReceptionService } from './visual-reception.service';

describe('VisualReceptionService', () => {
  let service: VisualReceptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisualReceptionService],
    }).compile();

    service = module.get<VisualReceptionService>(VisualReceptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
