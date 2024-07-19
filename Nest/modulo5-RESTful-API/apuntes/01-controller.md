# INTRO
En app.controller tenemos una clase con los endpoints.

Por defecto viene un @GET que ejecuta el método getHello() que busca el servicio appService.getHello()

```js
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
```

Este a su vez devuelve un texto

```js
export class AppService {
  getHello(): string {
    return 'Hola World!';
  }
}
```

El endpoint de () es el /
Podemos modificarlo de () al que gustemos ('/test')