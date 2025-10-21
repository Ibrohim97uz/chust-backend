import { Module } from '@nestjs/common';
import { StructureLeadershipService } from './structure-leadership.service';
import { StructureLeadershipController } from './structure-leadership.controller';

@Module({
  controllers: [StructureLeadershipController],
  providers: [StructureLeadershipService],
})
export class StructureLeadershipModule {}
