import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpservice: HttpService) {}

  getHello(): string {
    return 'Hola World!';
  }

  getPokemonByName(name: string) {
    return this.httpservice.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
