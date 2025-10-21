import { Controller } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Services } from 'generated/prisma';
import { createBaseController } from 'src/common/base/base-controller.factory';

@Controller('services')
export class ServicesController extends createBaseController<Services>({
  path: 'services',
  tag: 'Services',
  entity: CreateServiceDto,
  createDto: CreateServiceDto,
  updateDto: UpdateServiceDto,
}) {
  constructor(private readonly servicesService: ServicesService) {
    super(servicesService);
  }
}
