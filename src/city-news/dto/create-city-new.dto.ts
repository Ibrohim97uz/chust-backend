import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { City } from 'generated/prisma';

export class CreateCityNewDto implements Omit<City, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  about_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  about_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  about_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  about_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;
}
