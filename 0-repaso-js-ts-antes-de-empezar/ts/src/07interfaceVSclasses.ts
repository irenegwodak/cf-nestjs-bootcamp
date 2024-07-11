// La interface solo contiene el contrato de cómo es la estructura del objeto

interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  token: string;
  sayHello: () => string;
  //   funcion(){
  //   }
  //No se puede construir código,
}

// La class dice qué tiene y contruye el objeto, puede tener implementaciohnes, código

class PersonaClass {
  sayHello() {
    console.log('Grr');
    fetch('...');
  }
}

// Las interfaces se puede IMPLEMENTAR -> obliga a incluir el contrato de la interface
// Las classes se pueden EXTENDER con herencia -> permite reutilizar código

interface PetInterface {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return 'Hola';
  }
}

//
class Doggy implements PetInterface {
  sayHello() {
    return 'Hola desde Dog';
  }
}

class Cat extends PetClass {}
