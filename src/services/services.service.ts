import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Services } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ServicesService extends BaseService<Services> {
  constructor(prisma: PrismaService) {
    super(prisma, 'services');
  }
}
