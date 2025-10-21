import { Controller } from '@nestjs/common';
import { DistrictNewsService } from './district-news.service';
import { CreateDistrictNewDto } from './dto/create-district-new.dto';
import { UpdateDistrictNewDto } from './dto/update-district-new.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { DistrictNews } from 'generated/prisma';

@Controller('district-news')
export class DistrictNewsController extends createBaseController<DistrictNews>({
  path: 'districtNews',
  tag: 'DistrictNews',
  entity: CreateDistrictNewDto,
  createDto: CreateDistrictNewDto,
  updateDto: UpdateDistrictNewDto,
}) {
  constructor(private readonly districtNewsService: DistrictNewsService) {
    super(districtNewsService);
  }
}
