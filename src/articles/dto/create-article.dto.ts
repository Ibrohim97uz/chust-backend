import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Articles } from 'generated/prisma';

export class CreateArticleDto implements Omit<Articles, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  desc_en: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  desc_oz: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  desc_ru: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  desc_uz: string;
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
  @ApiProperty()
  @IsString()
  @IsOptional()
  url: string;
}
