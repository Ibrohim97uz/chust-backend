import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Gallery } from 'generated/prisma';

export class CreateGalleryDto implements Omit<Gallery, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  author: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  images: string;

  @ApiProperty({
    type: [String],
    required: false,
    description: 'Array of strings',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Type(() => String)
  tags: string[];

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
