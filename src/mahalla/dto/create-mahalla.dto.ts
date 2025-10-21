import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Mahalla } from 'generated/prisma';

export class CreateMahallaDto implements Omit<Mahalla, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  director_fullname_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_fullname_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_fullname_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  director_fullname_uz: string;

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
}
