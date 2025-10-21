import { PartialType } from '@nestjs/swagger';
import { CreateVisualReceptionDto } from './create-visual-reception.dto';

export class UpdateVisualReceptionDto extends PartialType(
  CreateVisualReceptionDto,
) {}
