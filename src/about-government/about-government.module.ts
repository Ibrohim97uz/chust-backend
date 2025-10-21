import { Module } from '@nestjs/common';
import { AboutGovernmentService } from './about-government.service';
import { AboutGovernmentController } from './about-government.controller';

@Module({
  controllers: [AboutGovernmentController],
  providers: [AboutGovernmentService],
})
export class AboutGovernmentModule {}
