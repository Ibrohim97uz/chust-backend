import { PartialType } from '@nestjs/swagger';
import { CreateUsefulAppDto } from './create-useful-app.dto';

export class UpdateUsefulAppDto extends PartialType(CreateUsefulAppDto) {}
