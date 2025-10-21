import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Contact } from 'generated/prisma';

export class CreateContactDto implements Omit<Contact, 'id'> {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  contactInfoId: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

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
