import { Controller } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Gallery } from 'generated/prisma';

@Controller('gallery')
export class GalleryController extends createBaseController<Gallery>({
  path: 'gallery',
  tag: 'Gallery',
  entity: CreateGalleryDto,
  createDto: CreateGalleryDto,
  updateDto: UpdateGalleryDto,
}) {
  constructor(private readonly galleryService: GalleryService) {
    super(galleryService);
  }
}
