import { Module } from '@nestjs/common';
import { CityNewsService } from './city-news.service';
import { CityNewsController } from './city-news.controller';

@Module({
  controllers: [CityNewsController],
  providers: [CityNewsService],
})
export class CityNewsModule {}
