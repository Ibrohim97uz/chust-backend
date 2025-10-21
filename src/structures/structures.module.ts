import { Module } from '@nestjs/common';
import { StructuresService } from './structures.service';
import { StructuresController } from './structures.controller';

@Module({
  controllers: [StructuresController],
  providers: [StructuresService],
})
export class StructuresModule {}
