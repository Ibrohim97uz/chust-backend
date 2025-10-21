import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { $Enums, Opportunities } from 'generated/prisma';

export class CreateOpportunityDto implements Omit<Opportunities, 'id'> {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age_from: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age_to: number;

  @ApiProperty()
  @IsEnum($Enums.CitizenshipEnum)
  @IsOptional()
  citizenship: $Enums.CitizenshipEnum;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  criminal_record: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  disability: boolean;

  @ApiProperty()
  @IsEnum($Enums.EducationTypeEnum)
  @IsOptional()
  education: $Enums.EducationTypeEnum;

  @ApiProperty()
  @IsEnum($Enums.GenderEnum)
  @IsOptional()
  gender: $Enums.GenderEnum;

  @ApiProperty()
  @IsEnum($Enums.ListedEnum)
  @IsOptional()
  listed: $Enums.ListedEnum;

  @ApiProperty()
  @IsEnum($Enums.MartialStatusEnum)
  @IsOptional()
  martial_status: $Enums.MartialStatusEnum;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pension: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  presence_of_car: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  presence_of_children: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  presence_of_pet: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  presence_of_realestate: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_desc_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_desc_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_desc_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_desc_uz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_en: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_oz: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_ru: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  question_uz: string;

  @ApiProperty({
    type: [String],
    required: false,
    description: 'Array of strings',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Type(() => String)
  spheres: string[];
}
