import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { UsefulApps } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UsefulAppsService extends BaseService<UsefulApps> {
  constructor(prisma: PrismaService) {
    super(prisma, 'usefulApps');
  }
}
