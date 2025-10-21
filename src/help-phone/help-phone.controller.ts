import { Controller } from '@nestjs/common';
import { HelpPhoneService } from './help-phone.service';
import { CreateHelpPhoneDto } from './dto/create-help-phone.dto';
import { UpdateHelpPhoneDto } from './dto/update-help-phone.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { HelpPhone } from 'generated/prisma';

@Controller('help-phone')
export class HelpPhoneController extends createBaseController<HelpPhone>({
  path: 'helpPhone',
  tag: 'HelpPhone',
  entity: CreateHelpPhoneDto,
  createDto: CreateHelpPhoneDto,
  updateDto: UpdateHelpPhoneDto,
}) {
  constructor(private readonly helpPhoneService: HelpPhoneService) {
    super(helpPhoneService);
  }
}
