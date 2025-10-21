import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { DistrictNews } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class DistrictNewsService extends BaseService<DistrictNews> {
  constructor(prisma: PrismaService) {
    super(prisma, 'districtNews');
  }
}
