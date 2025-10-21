import { Injectable } from '@nestjs/common';
import { Showcase } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ShowcaseService extends BaseService<Showcase> {
  constructor(prisma: PrismaService) {
    super(prisma, 'showcase');
  }
}
