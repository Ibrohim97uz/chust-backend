import { Test, TestingModule } from '@nestjs/testing';
import { HelloChustController } from './hello-chust.controller';
import { HelloChustService } from './hello-chust.service';

describe('HelloChustController', () => {
  let controller: HelloChustController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloChustController],
      providers: [HelloChustService],
    }).compile();

    controller = module.get<HelloChustController>(HelloChustController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
