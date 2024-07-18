# URL Params
ID o campo específico

## Ej:
@Get('/api/product/:id')
getProduct(@Param() params): any {
    return params;
}

localhost:3000/api/product/1
{
"id": "1"
}