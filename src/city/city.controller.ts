import { Controller } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { City } from 'generated/prisma';

@Controller('city')
export class CityController extends createBaseController<City>({
  path: 'city',
  tag: 'City',
  entity: CreateCityDto,
  createDto: CreateCityDto,
  updateDto: UpdateCityDto,
}) {
  constructor(private readonly cityService: CityService) {
    super(cityService);
  }
}
