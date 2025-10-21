import { PartialType } from '@nestjs/swagger';
import { CreateDocumentsForCorruptionDto } from './create-documents-for-corruption.dto';

export class UpdateDocumentsForCorruptionDto extends PartialType(
  CreateDocumentsForCorruptionDto,
) {}
