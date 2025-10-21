import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { PressService } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class PressServiceService extends BaseService<PressService> {
  constructor(prisma: PrismaService) {
    super(prisma, 'pressService');
  }
}
