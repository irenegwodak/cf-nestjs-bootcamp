"use strict";
//Si se llama a una variable que existe en un módulo, se puede utilizar la autoayuda para importarlo de forma automática (la bombilla azul)
//Extrae por destructuración
//A medida que se van llamando a variables, el import se va actualizando (PI, User, generetaID...)
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module");
var myNumber = 10 * utils_module_1.PI;
//Hemos cambiado el import para que en lugar de User sea Person
var myUser = {
    id: (0, utils_module_1.generateID)().toString(),
    name: 'Kevin',
};
////////////////
//Se puede importar un módulo de forma genérica con el * poniéndole un nombre
var Utils = require("./utils.module");
//Para llamar a las variables de ese módulo es necesario poner Utils. y lo que necesitemos del origen
var myOtherNumber = 10 * Utils.PI;
var myOtherUser = {
    id: Utils.generateID().toString(),
    name: 'Kevin',
};
console.log("10*PI=", myNumber, myOtherNumber, "myUser: ", myUser, "myOtherUser: ", myOtherUser);
