import { Module } from '@nestjs/common';
import { UsefulCitiesService } from './useful-cities.service';
import { UsefulCitiesController } from './useful-cities.controller';

@Module({
  controllers: [UsefulCitiesController],
  providers: [UsefulCitiesService],
})
export class UsefulCitiesModule {}
