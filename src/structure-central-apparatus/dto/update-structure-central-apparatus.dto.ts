import { PartialType } from '@nestjs/swagger';
import { CreateStructureCentralApparatusDto } from './create-structure-central-apparatus.dto';

export class UpdateStructureCentralApparatusDto extends PartialType(
  CreateStructureCentralApparatusDto,
) {}
