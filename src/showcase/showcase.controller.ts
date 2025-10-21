import { Controller } from '@nestjs/common';
import { ShowcaseService } from './showcase.service';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Showcase } from 'generated/prisma';

@Controller('showcase')
export class ShowcaseController extends createBaseController<Showcase>({
  path: 'showcase',
  tag: 'Showcase',
  entity: CreateShowcaseDto,
  createDto: CreateShowcaseDto,
  updateDto: UpdateShowcaseDto,
}) {
  constructor(private readonly showcaseService: ShowcaseService) {
    super(showcaseService);
  }
}
