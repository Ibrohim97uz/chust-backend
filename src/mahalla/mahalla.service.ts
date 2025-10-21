import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Mahalla } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class MahallaService extends BaseService<Mahalla> {
  constructor(prisma: PrismaService) {
    super(prisma, 'mahalla');
  }
}
