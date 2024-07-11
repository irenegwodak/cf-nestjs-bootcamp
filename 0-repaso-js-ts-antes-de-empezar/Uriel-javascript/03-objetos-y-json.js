// OBJECTS

let object = {};
//un objeto tiene propiedades (clave:valor) y métodos (funciones)

//Propiedades
let key2 = 'value2'; //variable normal
let objectWithProperties = {
  key: 'Value',
  key2, //shorthand properties - añadir una propiedad para una variable ya declarada: nombre variable = clave / valor = valor
};
//Métodos
let objectWithMethods = {
  method1: function name(params) {},
  method2: (params) => {},
  method2(params) {}, //shorthand syntax
};

//Ejemplo
let curso = {
  titulo: 'curso profesional de JS',
  formato: 'video',
  bloques: ['Introducción', 'Funciones'],
  inscribir(params) {
    return `${params} ha sido inscrito`;
  },
};

//Acceder a los datos
console.log(curso.titulo); // curso profesional de JS
console.log(curso['titulo']); // curso profesional de JS
console.log(curso.inscribir('Paquito')); // Paquito ha sido inscrito

curso.titulo = 'typescript de 0 a héroe'; //Modificar datos

//
//SPREAD OPERATOR (...) para Duplicar/combinar
//
let user = {
  age: 20,
  name: 'Pepe',
};
let permissionsForAdmin = {
  level: 2,
};
let admin = { ...user }; //copia
let admin2 = { ...user, isAdmin: true }; //copia + nueva propiedad
let admin3 = { ...user, ...permissionsForAdmin }; //copia + copia
let admin4 = { ...user, name: 'Ozzy' }; //propiedad duplicada se sobreescribe
let admin5 = { ...user, name: 'Junior', name: 'Ada' };

console.log('user: ', user); // { age: 20, name: 'Pepe' }
console.log('admin: ', admin); // { age: 20, name: 'Pepe' }
console.log('admin2: ', admin2); // { age: 20, name: 'Pepe', isAdmin: true }
console.log('admin3: ', admin3); // { age: 20, name: 'Pepe', level: 2 }
console.log('admin4: ', admin4); // { age: 20, name: 'Ozzy' }
console.log('admin5: ', admin5); // { age: 20, name: 'Ada' }

//
//Object.assign({}, nameOfObject)
//
// parecido al spread op pero haciendo copia objetos dentro del objeto en lugar de solo copiar una referencia a
//no copia arrays
let adminOA = Object.assign({}, user); //copia

let admin2OA = Object.assign({}, user, { isAdmin: true }); //copia + nueva propiedad
let admin3OA = Object.assign({}, user, permissionsForAdmin); //copia + copia
let admin4OA = Object.assign({}, user, { name: 'Ozzy' }); //propiedad duplicada se sobreescribe
let admin5OA = Object.assign({}, user, { name: 'Junior' }, { name: 'Ada' });

console.log('user: ', user); // { age: 20, name: 'Pepe' }
console.log('adminOA: ', adminOA); // { age: 20, name: 'Pepe' }
console.log('adminOA: ', adminOA); // { age: 20, name: 'Pepe' }
console.log('admin2OA: ', admin2OA); // { age: 20, name: 'Pepe', isAdmin: true }
console.log('admin3OA: ', admin3OA); // { age: 20, name: 'Pepe', level: 2 }
console.log('admin4OA: ', admin4OA); // { age: 20, name: 'Ozzy' }
console.log('admin5OA: ', admin5OA); // { age: 20, name: 'Ada' }

//
//DESTRUCTURING ASSIGNMENT {nombreVariable} = objeto;

let animal = {
  name: 'Siria',
  age: '2',
  type: 'mustelidae',
  color: 'white',
};

// busca el nombre de la nueva variable en las propiedades del objeto y asigna el valor del que coincida
let { name } = animal;
let { test } = animal; //no existe "test" en el objeto -> undefined
// se puede modificar el nombre de la variable con propiedad:nuevonombre
let { type: family } = animal;
// valores por defecto usando el =
let { name: anotherName, favouriteToy = 'ningyo' } = animal;
// spread operator
let { age, ...rest } = animal;

console.log(name); // Siria
console.log(test); // undefined
console.log(family); // mustelidae
console.log(anotherName); // Siria
console.log(favouriteToy); // ningyo
console.log(rest); // { name: 'Siria', type: 'mustelidae', color: 'white' }

// se aplica a los parámetros de las funciones de igual manera
let fanction = ({ name, type: famili }) => `${name}, ${famili}`;
console.log(fanction(animal)); // Siria, mustelidae

//se puede asignar el return de una función si es array/obj
let datosDelAnimalinchi = (numero, nombre, edad) => {
  return { numero, nombre, edad };
};
let { nombre, edad } = datosDelAnimalinchi(1, 'Ozzy', 6);
console.log(nombre); // Ozzy

//
//
//Javascript Object Notation - JSON
//solo permite {"clave": valor}, con la clave entre comillas
// strings, number, true/false, null, array, other json
// no shorthands
// no métodos
