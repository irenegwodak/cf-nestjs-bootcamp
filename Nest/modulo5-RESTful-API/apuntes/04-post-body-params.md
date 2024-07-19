Para crear nuevos datos - POST
Se envía un JSON
Para testear por POSTMAN o con un fetch

## Sintaxis
@Post('endpoint')
addUsers(@Body() nombreVariable: object): object {
}

## Ejemplo
@Post('/users')
addUsers(@Body() userData: object): object {
// this.users.push(userData);
return userData;
}