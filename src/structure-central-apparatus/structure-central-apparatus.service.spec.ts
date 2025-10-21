import { Test, TestingModule } from '@nestjs/testing';
import { StructureCentralApparatusService } from './structure-central-apparatus.service';

describe('StructureCentralApparatusService', () => {
  let service: StructureCentralApparatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructureCentralApparatusService],
    }).compile();

    service = module.get<StructureCentralApparatusService>(StructureCentralApparatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
