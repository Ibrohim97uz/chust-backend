import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { DocumentsForCorruption } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class DocumentsForCorruptionService extends BaseService<DocumentsForCorruption> {
  constructor(prisma: PrismaService) {
    super(prisma, 'documentsForCorruption');
  }
}
