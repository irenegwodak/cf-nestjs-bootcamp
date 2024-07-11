// ENUMS
// Tipo de dato que nos permite almacenar listas de datos estáticos
// Se usa PascalCase

// se asigna por defecto un número a cada item empezando por 0
enum Users {
  NormalUser, // 0
  PayedUser, // 1
  AdminUser, // 3
  MegaUser, // 4
}

const myUser = Users.AdminUser;
console.log(myUser); /* imprime: 2 */

// Se pueden asignar números o nombres distintos para ubicarlos o llamarlos en lenguaje humano
enum Users2 {
  NormalUser = 7,
  PayedUser /* continúa en 8, 9, 10... */,
  AdminUser,
  MegaUser,
}
enum Users21 {
  NormalUser = 7,
  PayedUser = 9,
  AdminUser = 11,
  MegaUser = 15,
}

enum Users3 {
  NormalUser = 'normal',
  PayedUser = 'payed',
  AdminUser = 'admin',
  MegaUser = 'mega',
}

const myUser3 = Users3.AdminUser;

if (myUser3 === 'admin') {
  /* Si cambia el valor de AdminUser toca cambiar a mano en todas partes */
}
if (myUser3 === Users3.AdminUser) {
  /* De esta forma es más escalable */
}

//EFICIENCIA CON ENUMS
// Si utilizamos la palabra reservada const antes del enum, en js solo se declara la variable cuando se utiliza. P.Ej:
const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Loading;

/*  
En JS solo se ha creado:
const estado = 1;

En cambio, el enum Users3 se ha creado así:
var Users3;
(function (Users3) {
    Users3["NormalUser"] = "normal";
    Users3["PayedUser"] = "payed";
    Users3["AdminUser"] = "admin";
    Users3["MegaUser"] = "mega";
})(Users3 || (Users3 = {}));

*/