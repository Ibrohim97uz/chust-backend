import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { StructureCentralApparatus } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class StructureCentralApparatusService extends BaseService<StructureCentralApparatus> {
  constructor(prisma: PrismaService) {
    super(prisma, 'structureCentralApparatus');
  }
}
