import { Module } from '@nestjs/common';
import { StructureDirectorService } from './structure-director.service';
import { StructureDirectorController } from './structure-director.controller';

@Module({
  controllers: [StructureDirectorController],
  providers: [StructureDirectorService],
})
export class StructureDirectorModule {}
