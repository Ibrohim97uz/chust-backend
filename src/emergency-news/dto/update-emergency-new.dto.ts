import { PartialType } from '@nestjs/swagger';
import { CreateEmergencyNewDto } from './create-emergency-new.dto';

export class UpdateEmergencyNewDto extends PartialType(CreateEmergencyNewDto) {}
