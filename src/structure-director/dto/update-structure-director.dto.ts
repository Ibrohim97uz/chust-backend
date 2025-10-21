import { PartialType } from '@nestjs/swagger';
import { CreateStructureDirectorDto } from './create-structure-director.dto';

export class UpdateStructureDirectorDto extends PartialType(
  CreateStructureDirectorDto,
) {}
