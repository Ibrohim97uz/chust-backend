import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PressService } from 'generated/prisma';

export class CreatePressServiceDto implements Omit<PressService, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  facebook: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagram: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telegram: string;

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
  @IsString()
  @IsOptional()
  youtube: string;
}
