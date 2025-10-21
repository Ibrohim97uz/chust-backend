import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { EmergencyNews } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class EmergencyNewsService extends BaseService<EmergencyNews> {
  constructor(prisma: PrismaService) {
    super(prisma, 'emergencyNews');
  }
}
