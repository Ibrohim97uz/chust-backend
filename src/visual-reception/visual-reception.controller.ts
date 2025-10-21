import { Controller } from '@nestjs/common';
import { VisualReceptionService } from './visual-reception.service';
import { CreateVisualReceptionDto } from './dto/create-visual-reception.dto';
import { UpdateVisualReceptionDto } from './dto/update-visual-reception.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { VisualReception } from 'generated/prisma';

@Controller('visual-reception')
export class VisualReceptionController extends createBaseController<VisualReception>(
  {
    path: 'visualReception',
    tag: 'VisualReception',
    entity: CreateVisualReceptionDto,
    createDto: CreateVisualReceptionDto,
    updateDto: UpdateVisualReceptionDto,
  },
) {
  constructor(private readonly visualReceptionService: VisualReceptionService) {
    super(visualReceptionService);
  }
}
