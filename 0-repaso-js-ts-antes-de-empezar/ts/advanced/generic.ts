//Datos dinámicos
//Se puede indicar un tipo genérico <T> (por convención) para asignarle el dato en la llamada final.
//Se puede llamar al tipo genérico como se quiera, p.e. <Tsaldnfln>
//Se puede aplicar a interfaces, clases, funciones...

interface MyInterface<Tsdf> {
  field: Tsdf;
}

interface Example {
  id: string;
  name: string;
}

//Aquí llamamos a la interface y se le indica el tipo de dato
const myValue: MyInterface<string> = {
  field: 'hola',
};

const mySecValue: MyInterface<number> = {
  field: 5,
};

//Si indicamos un tipo de dato de una interface, serán necesarios cumplir con todas las condiciones y tipos de datos de ambas interfaces
const mySecondValue: MyInterface<Example> = {
  field: {
    id: 'algo',
    name: 'algo',
  },
};

/////

class MyClass<T> {
  field: T;
  constructor(field: T) {
    this.field = field;
  }
}

// const myObject: MyClass<number> = new MyClass()

function getData<T>(id: string): Promise<T> | void {}

getData("Hola")