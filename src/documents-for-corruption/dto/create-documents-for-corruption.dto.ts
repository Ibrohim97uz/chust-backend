import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DocumentsForCorruption } from 'generated/prisma';

export class CreateDocumentsForCorruptionDto
  implements Omit<DocumentsForCorruption, 'id'>
{
  @ApiProperty()
  @IsString()
  @IsOptional()
  file: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title_uz: string;
}
