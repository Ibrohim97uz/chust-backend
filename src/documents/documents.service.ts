import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Documents } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class DocumentsService extends BaseService<Documents> {
  constructor(prisma: PrismaService) {
    super(prisma, 'documents');
  }
}
