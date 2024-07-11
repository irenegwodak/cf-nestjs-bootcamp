console.log(0, 'FUNCIONES');
//FUNCIONES
function sumaJS(v1, v2) {
  return v1 + v2;
}
function sumaTS(v1: number, v2: number): number {
  return v1 + v2;
}
let sumaJS2 = (a, b) => a + b;
let sumaTS2 = (a: number, b: number): number => a + b;
console.log("suma function JS = ", sumaJS(1, 1));
console.log("suma function TS = ", sumaTS(2, 2));
console.log("suma arrow func JS2 = ", sumaJS2(3, 3));
console.log("suma arrow func TS2 = ", sumaTS2(4, 4));

//
console.log();
console.log(0, 'PARÁMETROS DEFECTO');
//PARÁMETROS DEFECTO
function defecto(valor: string = 'Defecto'): void {
  console.log('Defecto = ', valor);
}
defecto();

//
console.log();
console.log(0, 'PARÁMETROS OPCIONALES (?)');
//PARÁMETROS OPCIONALES (?)
// siempre deben ir los últimos de todos los parámetros que existan

let optional = (nombreObligatorio: string, apellidoOpcional?: string) =>
  console.log(`Hola ${nombreObligatorio} ${apellidoOpcional ?? ''} `); // operador nullish coalescing (??) + valor predeterminado
let optional2 = (nombreObligatorio: string, apellidoOpcional: string = '') =>
  console.log(`Hola ${nombreObligatorio} ${apellidoOpcional} `); //en esta especificamos que apellido sea "opcional" al indicarle un valor "" por defecto
optional('Re');
optional2('Re2');
optional('Re', 'Wod');
optional2('Re2', 'Wod2');

//
//void - para una función sin return
function crearUsuario(nombre: string, apellido: string, edad: number): void {
  //no podemos retornar nada excepto undefined o null
}

//
//never - para funciones que nunca terminan
// function arrojaError(): never ;

//
console.log();
