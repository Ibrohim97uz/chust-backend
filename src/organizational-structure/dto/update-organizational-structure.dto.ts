import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationalStructureDto } from './create-organizational-structure.dto';

export class UpdateOrganizationalStructureDto extends PartialType(
  CreateOrganizationalStructureDto,
) {}
