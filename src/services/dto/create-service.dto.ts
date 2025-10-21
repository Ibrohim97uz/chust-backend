import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Services } from 'generated/prisma';

export class CreateServiceDto implements Omit<Services, 'id'> {
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
  @IsBoolean()
  @IsOptional()
  is_popular: boolean;

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

  @ApiProperty()
  @IsString()
  @IsOptional()
  video: string;
}
