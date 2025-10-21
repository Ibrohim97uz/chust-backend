import { Module } from '@nestjs/common';
import { UsefulAppsService } from './useful-apps.service';
import { UsefulAppsController } from './useful-apps.controller';

@Module({
  controllers: [UsefulAppsController],
  providers: [UsefulAppsService],
})
export class UsefulAppsModule {}
