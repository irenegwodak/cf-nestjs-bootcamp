// FUNCIONES CONSTRUCTORAS

// 1: función que creará la base del nuevo objeto
//por convención el nombre con inicial en mayúscula
function Example(params) {
  console.log(params);
  return this; //this es el objeto en sí mismo
}

// 2: operador New: crea un nuevo objeto instanciando la función constructora
let objetoExample = new Example('ex');

console.log(objetoExample);

// muestra
// se asignan propiedades como a un objeto literal, usando this para indicar como contexto el propio objeto

function Course(propiedad) {
  this.porDefecto = 'EL test';
  this.propiedad = propiedad;
  this.metodo = function () {};
}
console.log('función constructora: ', new Course());
let nuevoCurso = new Course('Nuevo curso de JS');

console.log('nuevoCurso: ', nuevoCurso);
