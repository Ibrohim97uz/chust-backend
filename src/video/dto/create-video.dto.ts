import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Video } from 'generated/prisma';

export class CreateVideoDto implements Omit<Video, 'id'> {
  @ApiProperty()
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({
    type: [String],
    required: false,
    description: 'Array of strings',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Type(() => String)
  tags: string[];

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
