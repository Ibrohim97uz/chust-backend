import { PartialType } from '@nestjs/swagger';
import { CreateDistrictDeputyDto } from './create-district-deputy.dto';

export class UpdateDistrictDeputyDto extends PartialType(
  CreateDistrictDeputyDto,
) {}
