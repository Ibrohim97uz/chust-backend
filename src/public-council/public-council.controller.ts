import { Controller } from '@nestjs/common';
import { PublicCouncilService } from './public-council.service';
import { CreatePublicCouncilDto } from './dto/create-public-council.dto';
import { UpdatePublicCouncilDto } from './dto/update-public-council.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { PublicCouncil } from 'generated/prisma';

@Controller('public-council')
export class PublicCouncilController extends createBaseController<PublicCouncil>(
  {
    path: 'publicCouncil',
    tag: 'PublicCouncil',
    entity: CreatePublicCouncilDto,
    createDto: CreatePublicCouncilDto,
    updateDto: UpdatePublicCouncilDto,
  },
) {
  constructor(private readonly publicCouncilService: PublicCouncilService) {
    super(publicCouncilService);
  }
}
