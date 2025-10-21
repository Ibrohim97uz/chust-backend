import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { CityNews } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class CityNewsService extends BaseService<CityNews> {
  constructor(prisma: PrismaService) {
    super(prisma, 'cityNews');
  }
}
