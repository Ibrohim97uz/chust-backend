import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { StructureDirector } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class StructureDirectorService extends BaseService<StructureDirector> {
  constructor(prisma: PrismaService) {
    super(prisma, 'structureDirector');
  }
}
