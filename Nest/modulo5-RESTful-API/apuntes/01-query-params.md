# QUERY PARAMS
@Get('/api/items')
getItems(@Query() queries): any {
  return queries
}

Este endpoint (/api/items?...) nos devolverá un objeto con los query params de la url.
Si la url es localhost:3000/api/items?key=1&items=2
El objeto devuelto será:
{
"key": "1",
"items": "2"
}