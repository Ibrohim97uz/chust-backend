import { Test, TestingModule } from '@nestjs/testing';
import { HelpPhoneController } from './help-phone.controller';
import { HelpPhoneService } from './help-phone.service';

describe('HelpPhoneController', () => {
  let controller: HelpPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpPhoneController],
      providers: [HelpPhoneService],
    }).compile();

    controller = module.get<HelpPhoneController>(HelpPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
