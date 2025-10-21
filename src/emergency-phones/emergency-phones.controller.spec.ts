import { Test, TestingModule } from '@nestjs/testing';
import { EmergencyPhonesController } from './emergency-phones.controller';
import { EmergencyPhonesService } from './emergency-phones.service';

describe('EmergencyPhonesController', () => {
  let controller: EmergencyPhonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergencyPhonesController],
      providers: [EmergencyPhonesService],
    }).compile();

    controller = module.get<EmergencyPhonesController>(EmergencyPhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
