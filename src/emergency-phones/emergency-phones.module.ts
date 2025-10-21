import { Module } from '@nestjs/common';
import { EmergencyPhonesService } from './emergency-phones.service';
import { EmergencyPhonesController } from './emergency-phones.controller';

@Module({
  controllers: [EmergencyPhonesController],
  providers: [EmergencyPhonesService],
})
export class EmergencyPhonesModule {}
