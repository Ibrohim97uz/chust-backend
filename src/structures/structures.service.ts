import { Injectable } from '@nestjs/common';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';
import { BaseService } from 'src/common/base/base.service';
import { Structures } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class StructuresService extends BaseService<Structures> {
  constructor(prisma: PrismaService) {
    super(prisma, 'structures');
  }
}
