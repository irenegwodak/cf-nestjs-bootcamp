import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  users: any;
  constructor(private readonly appService: AppService) {
    this.users = [
      { id: 1, name: 'name1', surname: 'surname1', age: 'age1' },
      { id: 2, name: 'name2', surname: 'surname2', age: 'age2' },
      { id: 3, name: 'name3', surname: 'surname3', age: 'age3' },
      { id: 4, name: 'name4', surname: 'surname4', age: 'age4' },
      { id: 5, name: 'name5', surname: 'surname5', age: 'age5' },
    ];
  }

  @Get('/api/users')
  getUsers(): string[] {
    return this.users;
  }

  @Get('/api/users/qty')
  getUsersQty(): number {
    return this.users.length;
  }

  @Get('/api/users/:id')
  getUserById(@Param('id') paramId): object {
    const user = this.users.find((user) => user.id === paramId);
    return user;
  }

  @Post('/api/users')
  addUser(@Body() inputData: any): object {
    const { name, surname, age } = inputData;
    if (!name || !surname || !age) {
      throw new BadRequestException('Invalid data');
    }

    const lastUser = this.users[this.users.length - 1];
    const newId = lastUser.id + 1;
    const newUserData = { id: newId, ...inputData };
    this.users.push(newUserData);

    return { message: 'User created Successfully' };
  }
}
