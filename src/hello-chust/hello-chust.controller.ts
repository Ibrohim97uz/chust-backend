import { Controller } from '@nestjs/common';
import { HelloChustService } from './hello-chust.service';
import { CreateHelloChustDto } from './dto/create-hello-chust.dto';
import { UpdateHelloChustDto } from './dto/update-hello-chust.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { HelloChust } from 'generated/prisma';

@Controller('hello-chust')
export class HelloChustController extends createBaseController<HelloChust>({
  path: 'helloChust',
  tag: 'HelloChust',
  entity: CreateHelloChustDto,
  createDto: CreateHelloChustDto,
  updateDto: UpdateHelloChustDto,
}) {
  constructor(private readonly helloChustService: HelloChustService) {
    super(helloChustService);
  }
}
