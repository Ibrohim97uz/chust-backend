import { PartialType } from '@nestjs/swagger';
import { CreateDistrictNewDto } from './create-district-new.dto';

export class UpdateDistrictNewDto extends PartialType(CreateDistrictNewDto) {}
