import { Controller } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { CreateContactInfoDto } from './dto/create-contact-info.dto';
import { UpdateContactInfoDto } from './dto/update-contact-info.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { ContactInfo } from 'generated/prisma';

@Controller('contact-info')
export class ContactInfoController extends createBaseController<ContactInfo>({
  path: 'contactInfo',
  tag: 'ContactInfo',
  entity: CreateContactInfoDto,
  createDto: CreateContactInfoDto,
  updateDto: UpdateContactInfoDto,
}) {
  constructor(private readonly contactInfoService: ContactInfoService) {
    super(contactInfoService);
  }
}
