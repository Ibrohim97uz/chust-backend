import { Injectable } from '@nestjs/common';
import { HelloChust } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class HelloChustService extends BaseService<HelloChust> {
  constructor(prisma: PrismaService) {
    super(prisma, 'helloChust');
  }
}
