import { PartialType } from '@nestjs/swagger';
import { CreateAboutGovernmentDto } from './create-about-government.dto';

export class UpdateAboutGovernmentDto extends PartialType(
  CreateAboutGovernmentDto,
) {}
