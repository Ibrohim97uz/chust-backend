import { PartialType } from '@nestjs/swagger';
import { CreateStructureLeadershipDto } from './create-structure-leadership.dto';

export class UpdateStructureLeadershipDto extends PartialType(
  CreateStructureLeadershipDto,
) {}
