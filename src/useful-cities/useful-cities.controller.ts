import { Controller } from '@nestjs/common';
import { UsefulCitiesService } from './useful-cities.service';
import { CreateUsefulCityDto } from './dto/create-useful-city.dto';
import { UpdateUsefulCityDto } from './dto/update-useful-city.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { UsefulCities } from 'generated/prisma';

@Controller('useful-cities')
export class UsefulCitiesController extends createBaseController<UsefulCities>({
  path: 'usefulCities',
  tag: 'UsefulCities',
  entity: CreateUsefulCityDto,
  createDto: CreateUsefulCityDto,
  updateDto: UpdateUsefulCityDto,
}) {
  constructor(private readonly usefulCitiesService: UsefulCitiesService) {
    super(usefulCitiesService);
  }
}
