import { Test, TestingModule } from '@nestjs/testing';
import { StructureLeadershipController } from './structure-leadership.controller';
import { StructureLeadershipService } from './structure-leadership.service';

describe('StructureLeadershipController', () => {
  let controller: StructureLeadershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StructureLeadershipController],
      providers: [StructureLeadershipService],
    }).compile();

    controller = module.get<StructureLeadershipController>(StructureLeadershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
