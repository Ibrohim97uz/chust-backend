import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { StructureDirector } from 'generated/prisma';

export class CreateStructureDirectorDto
  implements Omit<StructureDirector, 'id'>
{
  @ApiProperty()
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  full_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  working_time: string;
}
