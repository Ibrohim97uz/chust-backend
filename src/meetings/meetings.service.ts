import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Meetings } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class MeetingsService extends BaseService<Meetings> {
  constructor(prisma: PrismaService) {
    super(prisma, 'meetings');
  }
}
