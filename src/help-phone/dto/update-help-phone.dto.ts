import { PartialType } from '@nestjs/swagger';
import { CreateHelpPhoneDto } from './create-help-phone.dto';

export class UpdateHelpPhoneDto extends PartialType(CreateHelpPhoneDto) {}
