import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { VisualReception } from 'generated/prisma';

export class CreateVisualReceptionDto implements Omit<VisualReception, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  appeal_text: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  appeal_type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  enter_address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  last_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  middle_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone_number: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  rules_confirm: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  upload_files: string;
}
