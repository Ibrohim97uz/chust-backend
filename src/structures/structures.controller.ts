import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StructuresService } from './structures.service';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Structures } from 'generated/prisma';

@Controller('structures')
export class StructuresController extends createBaseController<Structures>({
  path: 'structures',
  tag: 'Structures',
  entity: CreateStructureDto,
  createDto: CreateStructureDto,
  updateDto: UpdateStructureDto,
}) {
  constructor(private readonly structuresService: StructuresService) {
    super(structuresService);
  }
}
