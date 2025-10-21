import { PartialType } from '@nestjs/swagger';
import { CreateHelloChustDto } from './create-hello-chust.dto';

export class UpdateHelloChustDto extends PartialType(CreateHelloChustDto) {}
