import { Module } from '@nestjs/common';
import { VisualReceptionService } from './visual-reception.service';
import { VisualReceptionController } from './visual-reception.controller';

@Module({
  controllers: [VisualReceptionController],
  providers: [VisualReceptionService],
})
export class VisualReceptionModule {}
