import { PartialType } from '@nestjs/swagger';
import { CreateStructureSystemOrgDto } from './create-structure-system-org.dto';

export class UpdateStructureSystemOrgDto extends PartialType(
  CreateStructureSystemOrgDto,
) {}
