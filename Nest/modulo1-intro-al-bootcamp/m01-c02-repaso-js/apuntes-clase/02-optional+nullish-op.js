// Optional chaining (?.)
const firstStudent = {
  name: 'Juani',
  age: 29,
  passport: {
    number: 123456,
    country: 'Argentina',
  },
};

const secondStudent = {
  name: 'Juani',
  age: 29,
};

console.log(firstStudent?.passport?.country);
console.log(secondStudent?.passport?.country);

// NULLISH coalescing OPERATOR (??)

// devuelve el dato a la izquierda del operador, si este es null o undefined devuelve el dato a la derecha
// datoIzquierda ?? datoDerecha
// es igual que:
// datoIzquierda = null o undefined ? datoDerecha : datoIzquierda

const age = 15;
const ageNot = undefined;
// let age;

//SIN nullish operator
const canDrive = age >= 18 ? true : 'menor';

//CON nullish operator
const canDrive2 = age >= 18 ?? 'nunca veremos esta respuesta'; //siempre va a dar true o false porque a la pregunta age>=18 siempre hay una respuesta
const canDrive4 = age >= 18; //la de antes es lo mismo que escribir esto
const canDrive3 = ageNot ?? 'es nulo o indefinido';

console.log('age: ', age, ',', 'age >= 18?', age >= 18);
console.log('canDrive', canDrive);
console.log('canDrive2', canDrive2);
console.log('canDrive3', canDrive3);
console.log('canDrive4', canDrive4);
