import { Module } from '@nestjs/common';
import { EmergencyNewsService } from './emergency-news.service';
import { EmergencyNewsController } from './emergency-news.controller';

@Module({
  controllers: [EmergencyNewsController],
  providers: [EmergencyNewsService],
})
export class EmergencyNewsModule {}
