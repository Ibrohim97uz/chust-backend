import { Injectable } from '@nestjs/common';
import { OrganizationalStructure } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class OrganizationalStructureService extends BaseService<OrganizationalStructure> {
  constructor(prisma: PrismaService) {
    super(prisma, 'organizationalStructure');
  }
}
