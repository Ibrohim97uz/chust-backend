import { Module } from '@nestjs/common';
import { DistrictNewsService } from './district-news.service';
import { DistrictNewsController } from './district-news.controller';

@Module({
  controllers: [DistrictNewsController],
  providers: [DistrictNewsService],
})
export class DistrictNewsModule {}
