import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StructureCentralApparatusService } from './structure-central-apparatus.service';
import { CreateStructureCentralApparatusDto } from './dto/create-structure-central-apparatus.dto';
import { UpdateStructureCentralApparatusDto } from './dto/update-structure-central-apparatus.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { StructureCentralApparatus } from 'generated/prisma';

@Controller('structure-central-apparatus')
export class StructureCentralApparatusController extends createBaseController<StructureCentralApparatus>(
  {
    path: 'structureCentralApparatus',
    tag: 'StructureCentralApparatus',
    entity: CreateStructureCentralApparatusDto,
    createDto: CreateStructureCentralApparatusDto,
    updateDto: UpdateStructureCentralApparatusDto,
  },
) {
  constructor(
    private readonly structureCentralApparatusService: StructureCentralApparatusService,
  ) {
    super(structureCentralApparatusService);
  }
}
