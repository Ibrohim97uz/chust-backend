import { Test, TestingModule } from '@nestjs/testing';
import { StructureDirectorService } from './structure-director.service';

describe('StructureDirectorService', () => {
  let service: StructureDirectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructureDirectorService],
    }).compile();

    service = module.get<StructureDirectorService>(StructureDirectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
