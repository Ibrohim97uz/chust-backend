import { Test, TestingModule } from '@nestjs/testing';
import { StructureDirectorController } from './structure-director.controller';
import { StructureDirectorService } from './structure-director.service';

describe('StructureDirectorController', () => {
  let controller: StructureDirectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StructureDirectorController],
      providers: [StructureDirectorService],
    }).compile();

    controller = module.get<StructureDirectorController>(StructureDirectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
