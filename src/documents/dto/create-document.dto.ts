import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { $Enums, Documents } from 'generated/prisma';

export class CreateDocumentDto implements Omit<Documents, 'id'> {
  @ApiProperty()
  @IsDate()
  @IsOptional()
  effective_date: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  number: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  publish_date: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  text_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  text_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  text_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  text_uz: string;

  @ApiProperty()
  @IsEnum($Enums.DocumentTypeEnum)
  @IsOptional()
  type: $Enums.DocumentTypeEnum;

  @ApiProperty()
  @IsString()
  @IsOptional()
  url: string;
}
