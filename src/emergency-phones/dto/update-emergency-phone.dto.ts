import { PartialType } from '@nestjs/swagger';
import { CreateEmergencyPhoneDto } from './create-emergency-phone.dto';

export class UpdateEmergencyPhoneDto extends PartialType(
  CreateEmergencyPhoneDto,
) {}
