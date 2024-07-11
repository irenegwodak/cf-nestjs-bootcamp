const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHi('estudiante');

function sayGoodbye(name: string) {
  console.log(`y ${name} se marchó`);
}
sayGoodbye('estudiante');

//si no se especifica el tipo de una función, se infiere el tipo, si no hay return será void
function show() {
  console.log('hola');
}

function showO(): number {
  console.log('hola');
  return 1;
}

//Se pueden especificar los tipos de los datos que se envían a la función

function showT(name: string): number {
  // name. sugiere métodos para tipo string
  console.log('hola');
  return 1;
}
function showTh(name: string[]): number {
  // name. sugiere métodos para tipo array de strings
  console.log('hola');
  return 1;
}

// Destructuring

const responseDestructuring = {
  id: 1,
  name: 'Kevin',
  charge: 'Dev',
  number: 4,
};

//Sin destructuring
// function showF(response: { name; id; charge; number }): number {
//   console.log('El name es:', response.name);
//   return 1;
// }

//Destructuring básico
// function showF({ name }: { name; id; charge; number }): number {
//   console.log('El name es:', name);
//   return 1;
// }

//Destructuring con spread
// function showF({ name, ...other }: { name; id; charge; number }): number {
//   console.log('El name es:', name);
//   return 1;
// }

// showF(responseDestructuring);

// Incluyendo Interface
interface ResponseServieCD {
  id: number;
  name: string;
  charge: string;
  number: number;
}

const responseDestructuringDos: ResponseServieCD = {
  id: 2,
  name: 'Amaia',
  charge: 'UI',
  number: 80,
};

//Destructuring con spread + interface
function showF({ name, ...other }: ResponseServieCD): number {
  console.log('El name es: ', name);
  console.log('otros datos: ', other);

  return 1;
}

showF(responseDestructuringDos);
