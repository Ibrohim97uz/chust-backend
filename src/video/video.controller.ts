import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { createBaseController } from 'src/common/base/base-controller.factory';
import { Video } from 'generated/prisma';

@Controller('video')
export class VideoController extends createBaseController<Video>({
  path: 'video',
  tag: 'Video',
  entity: CreateVideoDto,
  createDto: CreateVideoDto,
  updateDto: UpdateVideoDto,
}) {
  constructor(private readonly videoService: VideoService) {
    super(videoService);
  }
}
