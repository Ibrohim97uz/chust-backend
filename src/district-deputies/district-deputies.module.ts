import { Module } from '@nestjs/common';
import { DistrictDeputiesService } from './district-deputies.service';
import { DistrictDeputiesController } from './district-deputies.controller';

@Module({
  controllers: [DistrictDeputiesController],
  providers: [DistrictDeputiesService],
})
export class DistrictDeputiesModule {}
