import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { OrganizationalStructure } from 'generated/prisma';

export class CreateOrganizationalStructureDto
  implements Omit<OrganizationalStructure, 'id'>
{
  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;
}
