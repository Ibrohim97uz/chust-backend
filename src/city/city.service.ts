import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { City } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class CityService extends BaseService<City> {
  constructor(prisma: PrismaService) {
    super(prisma, 'city');
  }
}
