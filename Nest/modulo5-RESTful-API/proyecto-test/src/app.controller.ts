import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/api/product/:id')
  getProduct(@Param() params): any {
    const items = [
      { id: '1', name: 'product 1' },
      { id: '2', name: 'product 2' },
      { id: '3', name: 'product 3' },
    ];

    const item = items.find((item) => item.id === params.id);
    return item;
  }
}
