// Ya no existen los namespaces -> se actualizan a módulos

namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  const myUser = new User('Kevin');
  console.log(myUser);
}

const myOtherUser = new DatabaseEntity.User('Kevin 2');
console.log(myOtherUser);
