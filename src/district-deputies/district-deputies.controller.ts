import { Controller } from '@nestjs/common';
import { DistrictDeputiesService } from './district-deputies.service';
import { CreateDistrictDeputyDto } from './dto/create-district-deputy.dto';
import { UpdateDistrictDeputyDto } from './dto/update-district-deputy.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { DistrictDeputies } from 'generated/prisma';

@Controller('district-deputies')
export class DistrictDeputiesController extends createBaseController<DistrictDeputies>(
  {
    path: 'districtDeputies',
    tag: 'DistrictDeputies',
    entity: CreateDistrictDeputyDto,
    createDto: CreateDistrictDeputyDto,
    updateDto: UpdateDistrictDeputyDto,
  },
) {
  constructor(
    private readonly districtDeputiesService: DistrictDeputiesService,
  ) {
    super(districtDeputiesService);
  }
}
