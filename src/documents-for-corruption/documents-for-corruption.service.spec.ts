import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsForCorruptionService } from './documents-for-corruption.service';

describe('DocumentsForCorruptionService', () => {
  let service: DocumentsForCorruptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentsForCorruptionService],
    }).compile();

    service = module.get<DocumentsForCorruptionService>(DocumentsForCorruptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
