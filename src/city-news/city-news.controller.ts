import { Controller } from '@nestjs/common';
import { CityNewsService } from './city-news.service';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { CityNews } from 'generated/prisma';
import { CreateCityNewDto } from './dto/create-city-new.dto';
import { UpdateCityNewDto } from './dto/update-city-new.dto';

@Controller('city-news')
export class CityNewsController extends createBaseController<CityNews>({
  path: 'cityNews',
  tag: 'City news',
  entity: CreateCityNewDto,
  createDto: CreateCityNewDto,
  updateDto: UpdateCityNewDto,
}) {
  constructor(private readonly cityNewsService: CityNewsService) {
    super(cityNewsService);
  }
}
