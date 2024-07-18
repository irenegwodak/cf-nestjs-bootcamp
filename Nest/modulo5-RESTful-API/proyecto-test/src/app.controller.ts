import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/item')
  getItem(@Query('id') item): any {
    return item;
  }
  @Get('/api/items')
  getItems(@Query() queries): any {
    return queries;
  }
}
