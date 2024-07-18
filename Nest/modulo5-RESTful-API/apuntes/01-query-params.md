# QUERY PARAMS

Las queries son consultas enviadas a través de la url. 
Ej: localhost:3000/api/items?queri_1=valor_1&queri_2=valor_2
Estas se recuperan a través de un objeto.

## Sintaxis
@Get('endpoint')
getItems(@Query('queri1') variableName1, @Query('queri2') variableName2): any {
}
@Get('ruta')
getItems(@Query('CLAVEdelQueryQueQueremos') VARIABLEcustom_DondeSeGuardaVALORdelQuery): any {
}

Si @Query() está vacío (no se especifida la clave), variableCustom es un objeto con todas las queries de la url, se puede obtener una query destructurando después:

## Destructuring
@Get('endpoint')
getItems(@Query() queries): any {
  const { query_patata } = queries;
  return query_patata;
}

## Ejemplo 1
@Get('/api/search')
getQueries(@Query() queries): any {
  return queries
}

Para esta url: localhost:3000/api/search?id=1&lang=es
Este método devolverá:
{
"id": "1",
"lang": "es"
}

## Ejemplo 2

@Get('/api/item')
getItemId(@Query('id') id): any {
  return id;
}

Para esta url: localhost:3000/api/item?id=1&lang=es
El método @getItem devolverá:
1