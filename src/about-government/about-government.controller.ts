import { Controller } from '@nestjs/common';
import { AboutGovernmentService } from './about-government.service';
import { AboutGovernment } from 'generated/prisma';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { CreateAboutGovernmentDto } from './dto/create-about-government.dto';
import { UpdateAboutGovernmentDto } from './dto/update-about-government.dto';

@Controller('about-government')
export class AboutGovernmentController extends createBaseController<AboutGovernment>(
  {
    path: 'aboutGovernment',
    tag: 'About Government',
    entity: CreateAboutGovernmentDto,
    createDto: CreateAboutGovernmentDto,
    updateDto: UpdateAboutGovernmentDto,
  },
) {
  constructor(private readonly aboutGovernmentService: AboutGovernmentService) {
    super(aboutGovernmentService);
  }
}
