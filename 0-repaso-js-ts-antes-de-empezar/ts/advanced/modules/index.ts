//Si se llama a una variable que existe en un módulo, se puede utilizar la autoayuda para importarlo de forma automática (la bombilla azul)
//Extrae por destructuración
//A medida que se van llamando a variables, el import se va actualizando (PI, User, generetaID...)

import { PI, /* User ,*/ generateID } from './utils.module';

//Se puede modificar el nombre de una variable de un módulo para que en este archivo se importe con otro nombre:

import { User as Person } from './utils.module';

const myNumber = 10 * PI;

//Hemos cambiado el import para que en lugar de User sea Person
const myUser: /* User */ Person = {
  id: generateID().toString(),
  name: 'Kevin',
};

////////////////
//Se puede importar un módulo de forma genérica con el * poniéndole un nombre
import * as Utils from './utils.module';


//Para llamar a las variables de ese módulo es necesario poner Utils. y lo que necesitemos del origen
const myOtherNumber = 10 * Utils.PI;

const myOtherUser: Utils.User = {
  id: Utils.generateID().toString(),
  name: 'Kevin',
};

console.log("10*PI=" , myNumber, myOtherNumber, "myUser: ", myUser, "myOtherUser: ", myOtherUser);
