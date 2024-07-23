HTTP Module

npm i --save @nestjs/axios axios

"dependencies": {
    "@nestjs/axios": "^3.0.2",
    "axios": "^1.7.2",
}

## Importar http en módulo

```js
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
})

```
Con esto permitimos que se importe, que se pueda inyectar en nuestro servicio.

## Agregar HTTP al constructor de nuestro servicio

Siempre que se agregue en los imports del módulo, entrarán como parámetro del constructor.

Se agrega en el constructor(){} de la class del service.

```js
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpservice: HttpService) {}
}
```

## Crear método del servicio http


```js
getPokemonByName(name: string) {
  return this.httpservice.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

```
Esto va a devolver un observable de RxJS

## Ejecutar método en controlador

```js
@Get('api/pokemon/')
getPokemonLog(): any {
  console.log(this.appService.getPokemonByName('ditto'));
}
```
> Observable { _subscribe: [Function (anonymous)] }

Si en lugar de log tratamos de returnearlo devuelve 500 server error

## async await

```js
  @Get('api/pokemon/:name')
  async getPokemon(@Param('name') pokemon): Promise<any> {
    const { data } = await firstValueFrom(
      this.appService.getPokemonByName(pokemon),
    );
    return data;
  }
  ```