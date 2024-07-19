Queremos crear una aplicación que tenga tres rutas.
GET /api/users
GET /api/users/qty
GET /api/users/:id
En donde el endpoint de usuarios tiene que devolver un array con 5 objetos
que contengan 4 propiedades. ID, name, surname y age.
El endpoint /api/users/qty tiene que devolver un number con la cantidad
de usuarios que tiene el array (de manera dinámica)
El endpoint /api/users/:id tiene que devolver un objeto con la información
del usuario cuyo ID sea igual al parámetro :id

--------

Al ejercicio anterior queremos agregarle una nueva ruta
POST /api/users
La cual tiene que agregar un usuario a nuestro array original de usuarios
IMPORTANTE: El ID no lo tenemos que enviar en el body, se tiene que
calcular automaticamente. Sumado a eso, si el body no está correctamente
estructurado, tenemos que devolver el status code correspondiente