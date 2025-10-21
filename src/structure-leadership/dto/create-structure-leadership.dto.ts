import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { StructureLeadership } from 'generated/prisma';

export class CreateStructureLeadershipDto
  implements Omit<StructureLeadership, 'id'>
{
  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_duties_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_duties_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_duties_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio_duties_uz: string;

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

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  reception_time: string;
}
