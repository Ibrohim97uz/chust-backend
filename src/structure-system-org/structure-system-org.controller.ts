import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StructureSystemOrgService } from './structure-system-org.service';
import { CreateStructureSystemOrgDto } from './dto/create-structure-system-org.dto';
import { UpdateStructureSystemOrgDto } from './dto/update-structure-system-org.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { StructureSystemOrg } from 'generated/prisma';

@Controller('structure-system-org')
export class StructureSystemOrgController extends createBaseController<StructureSystemOrg>(
  {
    path: 'structureSystemOrg',
    tag: 'StructureSystemOrg',
    entity: CreateStructureSystemOrgDto,
    createDto: CreateStructureSystemOrgDto,
    updateDto: UpdateStructureSystemOrgDto,
  },
) {
  constructor(
    private readonly structureSystemOrgService: StructureSystemOrgService,
  ) {
    super(structureSystemOrgService);
  }
}
