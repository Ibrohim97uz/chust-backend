import { Injectable } from '@nestjs/common';
import { Articles } from 'generated/prisma';
import { BaseService } from 'src/common/base/base.service';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ArticlesService extends BaseService<Articles> {
  constructor(prisma: PrismaService) {
    super(prisma, 'articles');
  }
}
