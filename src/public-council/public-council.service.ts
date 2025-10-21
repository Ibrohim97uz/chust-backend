import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { PublicCouncil } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class PublicCouncilService extends BaseService<PublicCouncil> {
  constructor(prisma: PrismaService) {
    super(prisma, 'publicCouncil');
  }
}
