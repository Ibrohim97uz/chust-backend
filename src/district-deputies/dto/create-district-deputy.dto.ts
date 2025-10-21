import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { DistrictDeputies } from 'generated/prisma';

export class CreateDistrictDeputyDto implements Omit<DistrictDeputies, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_uz: string;

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
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  full_name: string;
}
