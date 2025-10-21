import { Module } from '@nestjs/common';
import { PressServiceService } from './press-service.service';
import { PressServiceController } from './press-service.controller';

@Module({
  controllers: [PressServiceController],
  providers: [PressServiceService],
})
export class PressServiceModule {}
