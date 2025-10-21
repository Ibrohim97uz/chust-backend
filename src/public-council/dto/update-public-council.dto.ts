import { PartialType } from '@nestjs/swagger';
import { CreatePublicCouncilDto } from './create-public-council.dto';

export class UpdatePublicCouncilDto extends PartialType(
  CreatePublicCouncilDto,
) {}
