// ENUMS
// Tipo de dato que nos permite almacenar listas de datos estáticos
// Se usa PascalCase
// se asigna por defecto un número a cada item empezando por 0
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["PayedUser"] = 1] = "PayedUser";
    Users[Users["AdminUser"] = 2] = "AdminUser";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser); /* imprime: 2 */
// Se pueden asignar números o nombres distintos para ubicarlos o llamarlos en lenguaje humano
var Users2;
(function (Users2) {
    Users2[Users2["NormalUser"] = 7] = "NormalUser";
    Users2[Users2["PayedUser"] = 8] = "PayedUser"; /* continúa en 8, 9, 10... */
    Users2[Users2["AdminUser"] = 9] = "AdminUser";
    Users2[Users2["MegaUser"] = 10] = "MegaUser";
})(Users2 || (Users2 = {}));
var Users21;
(function (Users21) {
    Users21[Users21["NormalUser"] = 7] = "NormalUser";
    Users21[Users21["PayedUser"] = 9] = "PayedUser";
    Users21[Users21["AdminUser"] = 11] = "AdminUser";
    Users21[Users21["MegaUser"] = 15] = "MegaUser";
})(Users21 || (Users21 = {}));
var Users3;
(function (Users3) {
    Users3["NormalUser"] = "normal";
    Users3["PayedUser"] = "payed";
    Users3["AdminUser"] = "admin";
    Users3["MegaUser"] = "mega";
})(Users3 || (Users3 = {}));
var myUser3 = Users3.AdminUser;
if (myUser3 === 'admin') {
    /* Si cambia el valor de AdminUser toca cambiar a mano en todas partes */
}
if (myUser3 === Users3.AdminUser) {
    /* De esta forma es más escalable */
}
var estado = 1 /* LoadingState.Loading */;
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
