https://docs.nestjs.com/exception-filters#built-in-http-exceptions

Ej:

```js
@Post('/api/users')
addUser(@Body() inputData: any): object[] {
    if (!inputData) {
        throw new BadRequestException('Invalid data');
    }
}
```