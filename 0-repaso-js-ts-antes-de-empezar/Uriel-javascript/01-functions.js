console.log('\n', 0, 'THE ARGUMENTS OBJECT', '\n');
//The arguments object - objeto de los argumentos pasados a la función (en ts es necesario indicar el spread op)

function argum(...ar) {
  console.log(ar); //[ 'hola', 'q', 'ase' ]
  console.log(...ar); // hola k ase
  console.log(arguments); // [Arguments] {'0':'hola', '1':'k', '2':'ase'}
  console.log(arguments[2]); //ase
}
argum('hola', 'q', 'ase');

//
console.log('\n', 0, 'MUTACIONES', '\n');
// MUTACIONES
//Función pura - no produce "efectos secundarios"

//versión mutable
let edadesMutable = [20];
function mutable(n) {
  n[0] = 25; //muta el valor original
  console.log('dentro de función: ' + n);
}
console.log('edades mutable original: ' + edadesMutable);
mutable(edadesMutable);
console.log('edades después de función mutable: ' + edadesMutable);

console.log('\n');
//versión pura
let edadesPura = [20];
function pura(n) {
  let copia = [...n];
  copia[0] = 25; //modificamos la copia, NO muta el valor original
  console.log('valor original dentro de función: ' + n);
  console.log('valor copia dentro de función: ' + copia);
  return copia;
}
console.log('edades pura original: ' + edadesPura);
pura(edadesPura);
console.log('edades después de función pura: ' + edadesPura);
