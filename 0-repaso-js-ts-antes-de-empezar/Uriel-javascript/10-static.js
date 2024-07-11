// Con la palabra reservada "static" se puede llamar a un método o propiedad directamente de la clase
// Esta propiedad/método NO SE HEREDA en las clases

class Api {
  static ENDPOINT = 'localhost:3000';
  static get() {
    console.log(this.ENDPOINT);
  }
}

//acceso a la clase directamente
console.log(Api.ENDPOINT);
Api.get();

// factory -> objeto que se encarga de crear otros objetos
class User {
  permission = 0;
  static admin() {
    let user = new this();
    user.permission = 5;
    return user;
  }
}
console.log(User.admin());
