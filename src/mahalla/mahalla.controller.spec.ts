import { Test, TestingModule } from '@nestjs/testing';
import { MahallaController } from './mahalla.controller';
import { MahallaService } from './mahalla.service';

describe('MahallaController', () => {
  let controller: MahallaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MahallaController],
      providers: [MahallaService],
    }).compile();

    controller = module.get<MahallaController>(MahallaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
