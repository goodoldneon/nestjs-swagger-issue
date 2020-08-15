import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

class Bar {
  @ApiProperty()
  name: string;
}

@Controller('bar')
export class BarController {
  @Get()
  get(): Bar {
    return { name: 'bar' };
  }
}
