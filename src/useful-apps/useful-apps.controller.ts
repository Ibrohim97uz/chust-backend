import { Controller } from '@nestjs/common';
import { UsefulAppsService } from './useful-apps.service';
import { CreateUsefulAppDto } from './dto/create-useful-app.dto';
import { UpdateUsefulAppDto } from './dto/update-useful-app.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { UsefulApps } from 'generated/prisma';

@Controller('useful-apps')
export class UsefulAppsController extends createBaseController<UsefulApps>({
  path: 'usefulApps',
  tag: 'UsefulApps',
  entity: CreateUsefulAppDto,
  createDto: CreateUsefulAppDto,
  updateDto: UpdateUsefulAppDto,
}) {
  constructor(private readonly usefulApps: UsefulAppsService) {
    super(usefulApps);
  }
}
