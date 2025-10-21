import { Injectable } from '@nestjs/common';
import { CreateStructureSystemOrgDto } from './dto/create-structure-system-org.dto';
import { UpdateStructureSystemOrgDto } from './dto/update-structure-system-org.dto';
import { BaseService } from 'src/common/base/base.service';
import { StructureSystemOrg } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class StructureSystemOrgService extends BaseService<StructureSystemOrg> {
  constructor(prisma: PrismaService) {
    super(prisma, 'structureSystemOrg');
  }
}
