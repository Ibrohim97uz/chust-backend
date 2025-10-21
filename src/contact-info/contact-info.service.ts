import { Injectable } from '@nestjs/common';
import { ContactInfo } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContactInfoService extends BaseService<ContactInfo> {
  constructor(prisma: PrismaService) {
    super(prisma, 'contactInfo');
  }
}
