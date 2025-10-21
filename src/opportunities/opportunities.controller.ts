import { Controller } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Opportunities } from 'generated/prisma';

@Controller('opportunities')
export class OpportunitiesController extends createBaseController<Opportunities>(
  {
    path: 'opportunities',
    tag: 'Opportunities',
    entity: CreateOpportunityDto,
    createDto: CreateOpportunityDto,
    updateDto: UpdateOpportunityDto,
  },
) {
  constructor(private readonly opportunitiesService: OpportunitiesService) {
    super(opportunitiesService);
  }
}
