import { Module } from '@nestjs/common';
import { BarController } from './controller';

@Module({
  controllers: [BarController]
})
export class BarModule {}
