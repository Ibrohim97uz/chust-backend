import { Module } from '@nestjs/common';
import { StructureSystemOrgService } from './structure-system-org.service';
import { StructureSystemOrgController } from './structure-system-org.controller';

@Module({
  controllers: [StructureSystemOrgController],
  providers: [StructureSystemOrgService],
})
export class StructureSystemOrgModule {}
