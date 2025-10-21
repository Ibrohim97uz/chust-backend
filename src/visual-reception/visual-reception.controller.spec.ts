import { Test, TestingModule } from '@nestjs/testing';
import { VisualReceptionController } from './visual-reception.controller';
import { VisualReceptionService } from './visual-reception.service';

describe('VisualReceptionController', () => {
  let controller: VisualReceptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisualReceptionController],
      providers: [VisualReceptionService],
    }).compile();

    controller = module.get<VisualReceptionController>(VisualReceptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
