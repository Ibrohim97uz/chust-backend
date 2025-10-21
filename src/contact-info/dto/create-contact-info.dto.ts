import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ContactInfo } from 'generated/prisma';

export class CreateContactInfoDto implements Omit<ContactInfo, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

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
  landmark: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  personal_acc_number: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telegram: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  working_hours: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  youtube: string;
}
