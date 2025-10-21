import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PublicCouncil } from 'generated/prisma';

export class CreatePublicCouncilDto implements Omit<PublicCouncil, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  address_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address_uz: string;

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
  name_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  name_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  structure_image: string;
}
