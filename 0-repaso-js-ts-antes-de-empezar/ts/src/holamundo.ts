let mensaje: string = 'hola mundo';

mensaje = 'chanchito feliz';


console.log(mensaje);

mensaje = '42';


/* Tipos de JS:
- number
- string
- boolean
- null
- undefined
- object
- function

Tipos de TS:
- any <- EVITAR
- unknown
- never
- arrays
- tuplas
- Emums

Tipos inferidos

Se asigna el tipo cuando se define la variable con un valor

let extincionDinosaurios: number = 76_000_000

Si solo se declara la variable sin valor, se le asigna el tipo any que se ha de evitar


Lo correcto sería asignar el tipo o el valor al declarar una variable.
*/