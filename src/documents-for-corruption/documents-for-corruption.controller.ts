import { Controller } from '@nestjs/common';
import { DocumentsForCorruptionService } from './documents-for-corruption.service';
import { CreateDocumentsForCorruptionDto } from './dto/create-documents-for-corruption.dto';
import { UpdateDocumentsForCorruptionDto } from './dto/update-documents-for-corruption.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { DocumentsForCorruption } from 'generated/prisma';

@Controller('documents-for-corruption')
export class DocumentsForCorruptionController extends createBaseController<DocumentsForCorruption>(
  {
    path: 'documentsForCorruption',
    tag: 'DocumentsForCorruption',
    entity: CreateDocumentsForCorruptionDto,
    createDto: CreateDocumentsForCorruptionDto,
    updateDto: UpdateDocumentsForCorruptionDto,
  },
) {
  constructor(
    private readonly documentsForCorruptionService: DocumentsForCorruptionService,
  ) {
    super(documentsForCorruptionService);
  }
}
