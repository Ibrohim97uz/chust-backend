import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { EmergencyNews } from 'generated/prisma';

export class CreateEmergencyNewDto implements Omit<EmergencyNews, 'id'> {
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
  for: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  parentId: number;

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
