# URL Params
ID o campo específico.

## Ej:
```js
@Get('/api/product/:id')
getProduct(@Param() params): any {
    return params;
}
```
Para: localhost:3000/api/product/1

Devuelve:

```js
{
"id": "1"
}
```