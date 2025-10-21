import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { VisualReception } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class VisualReceptionService extends BaseService<VisualReception> {
  constructor(prisma: PrismaService) {
    super(prisma, 'visualReception');
  }
}
