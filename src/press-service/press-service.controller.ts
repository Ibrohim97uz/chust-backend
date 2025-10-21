import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PressServiceService } from './press-service.service';
import { CreatePressServiceDto } from './dto/create-press-service.dto';
import { UpdatePressServiceDto } from './dto/update-press-service.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { PressService } from 'generated/prisma';

@Controller('press-service')
export class PressServiceController extends createBaseController<PressService>({
  path: 'pressService',
  tag: 'PressService',
  entity: CreatePressServiceDto,
  createDto: CreatePressServiceDto,
  updateDto: UpdatePressServiceDto,
}) {
  constructor(private readonly pressServiceService: PressServiceService) {
    super(pressServiceService);
  }
}
