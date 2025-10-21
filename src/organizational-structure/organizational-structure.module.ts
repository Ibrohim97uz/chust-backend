import { Module } from '@nestjs/common';
import { OrganizationalStructureService } from './organizational-structure.service';
import { OrganizationalStructureController } from './organizational-structure.controller';

@Module({
  controllers: [OrganizationalStructureController],
  providers: [OrganizationalStructureService],
})
export class OrganizationalStructureModule {}
