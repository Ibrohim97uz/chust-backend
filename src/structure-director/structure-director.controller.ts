import { Controller } from '@nestjs/common';
import { StructureDirectorService } from './structure-director.service';
import { CreateStructureDirectorDto } from './dto/create-structure-director.dto';
import { UpdateStructureDirectorDto } from './dto/update-structure-director.dto';
import { StructureDirector } from 'generated/prisma';
import { createBaseController } from 'src/common/base/base-controller.factory';

@Controller('structure-director')
export class StructureDirectorController extends createBaseController<StructureDirector>(
  {
    path: 'structureDirector',
    tag: 'StructureDirector',
    entity: CreateStructureDirectorDto,
    createDto: CreateStructureDirectorDto,
    updateDto: UpdateStructureDirectorDto,
  },
) {
  constructor(
    private readonly structureDirectorService: StructureDirectorService,
  ) {
    super(structureDirectorService);
  }
}
