import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { AboutGovernment } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class AboutGovernmentService extends BaseService<AboutGovernment> {
  constructor(prisma: PrismaService) {
    super(prisma, 'aboutGovernment');
  }
}
