import { Module } from '@nestjs/common';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/module';

@Module({
  imports: [FooModule, BarModule],
})
export class AppModule {}
