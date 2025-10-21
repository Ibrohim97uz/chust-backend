import { Injectable } from '@nestjs/common';
import { UsefulCities } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UsefulCitiesService extends BaseService<UsefulCities> {
  constructor(prisma: PrismaService) {
    super(prisma, 'usefulCities');
  }
}
