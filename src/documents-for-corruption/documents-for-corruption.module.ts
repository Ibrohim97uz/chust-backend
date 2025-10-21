import { Module } from '@nestjs/common';
import { DocumentsForCorruptionService } from './documents-for-corruption.service';
import { DocumentsForCorruptionController } from './documents-for-corruption.controller';

@Module({
  controllers: [DocumentsForCorruptionController],
  providers: [DocumentsForCorruptionService],
})
export class DocumentsForCorruptionModule {}
