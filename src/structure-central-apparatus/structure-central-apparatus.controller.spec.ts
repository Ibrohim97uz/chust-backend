import { Test, TestingModule } from '@nestjs/testing';
import { StructureCentralApparatusController } from './structure-central-apparatus.controller';
import { StructureCentralApparatusService } from './structure-central-apparatus.service';

describe('StructureCentralApparatusController', () => {
  let controller: StructureCentralApparatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StructureCentralApparatusController],
      providers: [StructureCentralApparatusService],
    }).compile();

    controller = module.get<StructureCentralApparatusController>(StructureCentralApparatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
