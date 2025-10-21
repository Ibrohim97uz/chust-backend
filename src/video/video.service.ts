import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Video } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class VideoService extends BaseService<Video> {
  constructor(prisma: PrismaService) {
    super(prisma, 'video');
  }
}
