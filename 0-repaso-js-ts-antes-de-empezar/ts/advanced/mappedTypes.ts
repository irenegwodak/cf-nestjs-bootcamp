//interfaces y tipos
// crear tipos de manera dinámica en base a otros tipos o interfaces

interface Person {
  name: string;
  age: number;
}

//Queremos conseguir de forma automática la siguiente interface:
// interface GetPerson {
//   getName: () => string;
//   getAge: () => number;
// }

type Getter<T> = {
  // key: value;
  [Property in keyof T]: () => T[Property];
};

type GetPerson = Getter<Person>;

// En GetPerson obtenemos la interface
// interface GetPerson {
//   name: () => string;
//   age: () => number;
// }

// Queremos que se añada el get delante y la inicial en mayus:
// Añadimos un alias que añade get:
//      as `get${string&Property}`
// Y añadimos que la primera sea mayus:
//      Capitalize<>
// queda así:
//   [Property in keyof T as `get${Capitalize<string&Property>}`]: () => T[Property];

type GetterFinal<T> = {
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};

interface Animal {
  id: number;
  name: string;
  type: string;
  isAdopted: boolean;
}
type GetAnimal = Getter<Animal>;

type GetAnimalFinal = GetterFinal<Animal>;
