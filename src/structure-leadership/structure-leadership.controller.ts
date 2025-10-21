import { Controller } from '@nestjs/common';
import { StructureLeadershipService } from './structure-leadership.service';
import { CreateStructureLeadershipDto } from './dto/create-structure-leadership.dto';
import { UpdateStructureLeadershipDto } from './dto/update-structure-leadership.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { StructureLeadership } from 'generated/prisma';

@Controller('structure-leadership')
export class StructureLeadershipController extends createBaseController<StructureLeadership>(
  {
    path: 'structureLeadership',
    tag: 'StructureLeadership',
    entity: CreateStructureLeadershipDto,
    createDto: CreateStructureLeadershipDto,
    updateDto: UpdateStructureLeadershipDto,
  },
) {
  constructor(
    private readonly structureLeadershipService: StructureLeadershipService,
  ) {
    super(structureLeadershipService);
  }
}
