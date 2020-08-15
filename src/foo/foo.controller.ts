import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

class Foo {
  @ApiProperty()
  name: string;
}

@Controller('foo')
export class FooController {
  @Get()
  get(): Foo {
    return { name: 'foo' };
  }
}
