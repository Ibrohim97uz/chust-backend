import { Module } from '@nestjs/common';
import { StructureCentralApparatusService } from './structure-central-apparatus.service';
import { StructureCentralApparatusController } from './structure-central-apparatus.controller';

@Module({
  controllers: [StructureCentralApparatusController],
  providers: [StructureCentralApparatusService],
})
export class StructureCentralApparatusModule {}
