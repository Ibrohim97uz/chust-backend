import { Test, TestingModule } from '@nestjs/testing';
import { StructureSystemOrgService } from './structure-system-org.service';

describe('StructureSystemOrgService', () => {
  let service: StructureSystemOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructureSystemOrgService],
    }).compile();

    service = module.get<StructureSystemOrgService>(StructureSystemOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
