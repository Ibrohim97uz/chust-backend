import { Module } from '@nestjs/common';
import { PublicCouncilService } from './public-council.service';
import { PublicCouncilController } from './public-council.controller';

@Module({
  controllers: [PublicCouncilController],
  providers: [PublicCouncilService],
})
export class PublicCouncilModule {}
