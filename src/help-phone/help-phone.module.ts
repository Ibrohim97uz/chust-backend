import { Module } from '@nestjs/common';
import { HelpPhoneService } from './help-phone.service';
import { HelpPhoneController } from './help-phone.controller';

@Module({
  controllers: [HelpPhoneController],
  providers: [HelpPhoneService],
})
export class HelpPhoneModule {}
