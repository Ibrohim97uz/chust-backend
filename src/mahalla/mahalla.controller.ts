import { Controller } from '@nestjs/common';
import { MahallaService } from './mahalla.service';
import { CreateMahallaDto } from './dto/create-mahalla.dto';
import { UpdateMahallaDto } from './dto/update-mahalla.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Mahalla } from 'generated/prisma';

@Controller('mahalla')
export class MahallaController extends createBaseController<Mahalla>({
  path: 'mahalla',
  tag: 'Mahalla',
  entity: CreateMahallaDto,
  createDto: CreateMahallaDto,
  updateDto: UpdateMahallaDto,
}) {
  constructor(private readonly mahallaService: MahallaService) {
    super(mahallaService);
  }
}
