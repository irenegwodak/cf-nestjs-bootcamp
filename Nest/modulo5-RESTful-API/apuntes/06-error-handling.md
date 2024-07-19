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

```js
// forma 1
if (!inputData?.name || !inputData?.surname || !inputData?.age) {
    throw new BadRequestException('Invalid data');
}
```
```js
// destructuring
const { name, surname, age } = inputData;
if (!name || !surname || !age) {
    throw new BadRequestException('Invalid data');
}
```