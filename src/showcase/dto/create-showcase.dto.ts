import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Showcase } from 'generated/prisma';

export class CreateShowcaseDto implements Omit<Showcase, 'id'> {
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
  chust_admin_phone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  short_phone_number: string;
}
