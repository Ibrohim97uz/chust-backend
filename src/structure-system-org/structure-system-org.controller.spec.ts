import { Test, TestingModule } from '@nestjs/testing';
import { StructureSystemOrgController } from './structure-system-org.controller';
import { StructureSystemOrgService } from './structure-system-org.service';

describe('StructureSystemOrgController', () => {
  let controller: StructureSystemOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StructureSystemOrgController],
      providers: [StructureSystemOrgService],
    }).compile();

    controller = module.get<StructureSystemOrgController>(StructureSystemOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
