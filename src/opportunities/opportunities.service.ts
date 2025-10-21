import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Opportunities } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class OpportunitiesService extends BaseService<Opportunities> {
  constructor(prisma: PrismaService) {
    super(prisma, 'opportunities');
  }
}
