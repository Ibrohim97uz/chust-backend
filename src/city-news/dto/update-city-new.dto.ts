import { PartialType } from '@nestjs/swagger';
import { CreateCityNewDto } from './create-city-new.dto';

export class UpdateCityNewDto extends PartialType(CreateCityNewDto) {}
