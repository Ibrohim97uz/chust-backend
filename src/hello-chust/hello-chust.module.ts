import { Module } from '@nestjs/common';
import { HelloChustService } from './hello-chust.service';
import { HelloChustController } from './hello-chust.controller';

@Module({
  controllers: [HelloChustController],
  providers: [HelloChustService],
})
export class HelloChustModule {}
