import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Structures } from 'generated/prisma';

export class CreateStructureDto implements Omit<Structures, 'id'> {
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
  director_address_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_address_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_address_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_address_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_facebook_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_facebook_url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_telegram_bot_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_telegram_bot_url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  internal_management_file: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  internal_management_image: string;
}
