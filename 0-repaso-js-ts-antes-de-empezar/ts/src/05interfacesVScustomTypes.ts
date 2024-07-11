type NewPerson = {
  name: string;
  age: number;
};

interface Employee extends NewPerson {
  charge: number;
}

//interface xxx extends (type | interface) ✅
//type xxx extends (type | interface) ❌

const newEmployee: Employee = {
  age: 40,
  charge: 50,
  name: '',
};

//Union types

type Person123 = {
  name: string;
  age: number;
};

type User = {
  id: string;
};

//Se pueden unir types o interfaces con el &

// type Admin = User & { token: string };

// const myAdmin: Admin = {
//   //Autocompleta las propiedades de id y de token
// };

// type Admin = User & Person123;

// const myAdmin: Admin = {
//   age: 12,
//   id,
//   name,

//   //Autocompleta las propiedades de id y de token
// };

// Usos
//type se puede usar para definir tipos o valores concretos
type ServicesResponseToken = string | null | undefined;
type UserType = 'admin' | 'superUser' | 0;

// const myUser: User = 5; ❌

//interfaces
//Se puede crear varias veces una interface en el mismo archivo y se mergean
//Si están en distintos archivos se sobreescriben
interface Developer {
  name: string;
  stack: [];
}
interface Developer {
  phone: string;
}

// const me: Developer = {
//   Se autorrellenan todos los valores,
//   name,
//   stack,
//   phone,
// };

//Typescript recomienda usar Interfaces antes que types