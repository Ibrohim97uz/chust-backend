import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { EmergencyPhones } from 'generated/prisma';

export class CreateEmergencyPhoneDto implements Omit<EmergencyPhones, 'id'> {
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
  phone_number: string;
}
