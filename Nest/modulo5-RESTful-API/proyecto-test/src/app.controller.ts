import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  users: any;
  constructor(private readonly appService: AppService) {
    this.users = [
      { id: '1', name: 'name1', surname: 'surname1', age: 'age1' },
      { id: '2', name: 'name2', surname: 'surname2', age: 'age2' },
      { id: '3', name: 'name3', surname: 'surname3', age: 'age3' },
      { id: '4', name: 'name4', surname: 'surname4', age: 'age4' },
      { id: '5', name: 'name5', surname: 'surname5', age: 'age5' },
    ];
  }

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

  @Post('/users')
  addUsers(@Body() userData: object): object {
    // this.users.push(userData);
    return userData;
  }
}
