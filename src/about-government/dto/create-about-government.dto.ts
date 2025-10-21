import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { AboutGovernment } from 'generated/prisma';

export class CreateAboutGovernmentDto implements Omit<AboutGovernment, 'id'> {
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
  image: string;
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
