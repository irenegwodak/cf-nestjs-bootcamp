import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  users = [
    { ID: '1', name: 'name1', surname: 'surname1', age: 'age1' },
    { ID: '2', name: 'name2', surname: 'surname2', age: 'age2' },
    { ID: '3', name: 'name3', surname: 'surname3', age: 'age3' },
    { ID: '4', name: 'name4', surname: 'surname4', age: 'age4' },
    { ID: '5', name: 'name5', surname: 'surname5', age: 'age5' },
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/users')
  getUsers(): any {
    return this.users;
  }

  @Get('/api/users/qty')
  getQty(): number {
    return this.users.length;
  }

  @Get('/api/users/:id')
  getUser(@Param() params): object {
    // tenemos que buscar la ID recogid en id entre las IDs del array de objetos "users"

    const user = this.users.find((user) => user.ID === params.id);
    return user;
  }
}
