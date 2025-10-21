import { Controller } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Documents } from 'generated/prisma';

@Controller('documents')
export class DocumentsController extends createBaseController<Documents>({
  path: 'documents',
  tag: 'Documents',
  entity: CreateDocumentDto,
  createDto: CreateDocumentDto,
  updateDto: UpdateDocumentDto,
}) {
  constructor(private readonly documentsService: DocumentsService) {
    super(documentsService);
  }
}
