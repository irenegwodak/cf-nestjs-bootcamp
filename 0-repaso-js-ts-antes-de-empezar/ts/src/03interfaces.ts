//INTERFACES
//tipar nuestros propios tipos de datos
//se define un objeto que tendrá una estructura tipada
//contrato, firma, boceto, bosquejo, esqueleto, molde

interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string /* ? para indicar que es opcional */;
  sayHello: () => string /* indica el tipo de dato devuelto por la función */;
}

let person: Object = {
  name: 'Kevin',
  code: '01',
  charge: 1,
  description: 'hola',
  sayHello: () => {
    // guardarToken();
    // hacerFoto();
    return 'hola';
  },
};

//person es un objeto, se pueden usar métodos de objetos pero no llamar a sus propiedades:
//person.toString, person.valueOf...

let person2: Person = {
  name: 'Kevin',
  code: '01',
  charge: 1,
  description: 'hola',
  sayHello: () => 'Hola 2',
};
//person2 es de tipo "Person", se pueden llamar a sus propiedades:
//person2.name, person2.code...

// let person3: Person = {};
// Si no se rellenan los datos del tipo creado, da error y sugiere rellenarlos automáticamente
