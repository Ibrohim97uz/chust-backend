import { PartialType } from '@nestjs/swagger';
import { CreateUsefulCityDto } from './create-useful-city.dto';

export class UpdateUsefulCityDto extends PartialType(CreateUsefulCityDto) {}
