import { Controller } from '@nestjs/common';
import { OrganizationalStructureService } from './organizational-structure.service';
import { CreateOrganizationalStructureDto } from './dto/create-organizational-structure.dto';
import { UpdateOrganizationalStructureDto } from './dto/update-organizational-structure.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { OrganizationalStructure } from 'generated/prisma';

@Controller('organizational-structure')
export class OrganizationalStructureController extends createBaseController<OrganizationalStructure>(
  {
    path: 'organizationalStructure',
    tag: 'OrganizationalStructure',
    entity: CreateOrganizationalStructureDto,
    createDto: CreateOrganizationalStructureDto,
    updateDto: UpdateOrganizationalStructureDto,
  },
) {
  constructor(
    private readonly organizationalStructureService: OrganizationalStructureService,
  ) {
    super(organizationalStructureService);
  }
}
