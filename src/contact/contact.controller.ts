import { Controller } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Contact } from 'generated/prisma';

@Controller('contact')
export class ContactController extends createBaseController<Contact>({
  path: 'contact',
  tag: 'Contact',
  entity: CreateContactDto,
  createDto: CreateContactDto,
  updateDto: UpdateContactDto,
}) {
  constructor(private readonly contactService: ContactService) {
    super(contactService);
  }
}
