import { PartialType } from '@nestjs/swagger';
import { CreatePressServiceDto } from './create-press-service.dto';

export class UpdatePressServiceDto extends PartialType(CreatePressServiceDto) {}
