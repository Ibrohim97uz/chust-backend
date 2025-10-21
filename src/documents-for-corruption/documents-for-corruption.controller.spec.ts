import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsForCorruptionController } from './documents-for-corruption.controller';
import { DocumentsForCorruptionService } from './documents-for-corruption.service';

describe('DocumentsForCorruptionController', () => {
  let controller: DocumentsForCorruptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentsForCorruptionController],
      providers: [DocumentsForCorruptionService],
    }).compile();

    controller = module.get<DocumentsForCorruptionController>(DocumentsForCorruptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
