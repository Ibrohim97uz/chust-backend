import { Injectable } from '@nestjs/common';
import { Gallery } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class GalleryService extends BaseService<Gallery> {
  constructor(prisma: PrismaService) {
    super(prisma, 'gallery');
  }
}
