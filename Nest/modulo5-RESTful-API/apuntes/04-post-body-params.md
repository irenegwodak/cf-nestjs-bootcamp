Para crear nuevos datos - POST

Se envía un JSON.

Para testear por POSTMAN o con un fetch.

## Sintaxis

```js
@Post('endpoint')
addUsers(@Body() nombreVariable: object): object {
}
```

## Ejemplo

```js
@Post('/users')
addUsers(@Body() userData: object): object {
    this.users.push(userData);
    return userData;
}
```