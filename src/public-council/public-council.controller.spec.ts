import { Test, TestingModule } from '@nestjs/testing';
import { PublicCouncilController } from './public-council.controller';
import { PublicCouncilService } from './public-council.service';

describe('PublicCouncilController', () => {
  let controller: PublicCouncilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicCouncilController],
      providers: [PublicCouncilService],
    }).compile();

    controller = module.get<PublicCouncilController>(PublicCouncilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
