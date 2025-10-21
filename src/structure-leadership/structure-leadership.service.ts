import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { StructureLeadership } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class StructureLeadershipService extends BaseService<StructureLeadership> {
  constructor(prisma: PrismaService) {
    super(prisma, 'structureLeadership');
  }
}
