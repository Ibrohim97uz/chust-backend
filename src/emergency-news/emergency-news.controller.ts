import { Controller } from '@nestjs/common';
import { EmergencyNewsService } from './emergency-news.service';
import { CreateEmergencyNewDto } from './dto/create-emergency-new.dto';
import { UpdateEmergencyNewDto } from './dto/update-emergency-new.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { EmergencyNews } from 'generated/prisma';

@Controller('emergency-news')
export class EmergencyNewsController extends createBaseController<EmergencyNews>(
  {
    path: 'emergencyNews',
    tag: 'EmergencyNews',
    entity: CreateEmergencyNewDto,
    createDto: CreateEmergencyNewDto,
    updateDto: UpdateEmergencyNewDto,
  },
) {
  constructor(private readonly emergencyNewsService: EmergencyNewsService) {
    super(emergencyNewsService);
  }
}
