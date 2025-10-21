import { Controller } from '@nestjs/common';
import { EmergencyPhonesService } from './emergency-phones.service';
import { CreateEmergencyPhoneDto } from './dto/create-emergency-phone.dto';
import { UpdateEmergencyPhoneDto } from './dto/update-emergency-phone.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { EmergencyPhones } from 'generated/prisma';

@Controller('emergency-phones')
export class EmergencyPhonesController extends createBaseController<EmergencyPhones>(
  {
    path: 'emergencyPhones',
    tag: 'EmergencyPhones',
    entity: CreateEmergencyPhoneDto,
    createDto: CreateEmergencyPhoneDto,
    updateDto: UpdateEmergencyPhoneDto,
  },
) {
  constructor(private readonly emergencyPhonesService: EmergencyPhonesService) {
    super(emergencyPhonesService);
  }
}
