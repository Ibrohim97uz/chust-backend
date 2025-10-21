import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { HelpPhone } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class HelpPhoneService extends BaseService<HelpPhone> {
  constructor(prisma: PrismaService) {
    super(prisma, 'helpPhone');
  }
}
