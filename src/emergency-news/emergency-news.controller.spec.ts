import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyNewsController } from './emergency-news.controller';
import { EmergencyNewsService } from './emergency-news.service';

describe('EmergencyNewsController', () => {
  let controller: EmergencyNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyNewsController],
      providers: [EmergencyNewsService],
    }).compile();

    controller = module.get<EmergencyNewsController>(EmergencyNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
