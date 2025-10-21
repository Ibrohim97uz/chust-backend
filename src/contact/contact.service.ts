import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base/base.service';
import { Contact } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ContactService extends BaseService<Contact> {
  constructor(prisma: PrismaService) {
    super(prisma, 'contact');
  }
}
