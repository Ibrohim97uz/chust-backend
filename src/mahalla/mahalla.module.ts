import { Module } from '@nestjs/common';
import { MahallaService } from './mahalla.service';
import { MahallaController } from './mahalla.controller';

@Module({
  controllers: [MahallaController],
  providers: [MahallaService],
})
export class MahallaModule {}
