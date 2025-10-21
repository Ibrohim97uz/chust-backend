import { Injectable } from '@nestjs/common';
import { EmergencyPhones } from 'generated/prisma';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class EmergencyPhonesService extends BaseService<EmergencyPhones> {
  constructor(prisma: PrismaService) {
    super(prisma, 'emergencyPhones');
  }
}
