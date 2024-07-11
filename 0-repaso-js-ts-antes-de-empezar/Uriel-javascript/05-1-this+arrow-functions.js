// RESUMEN: 
//          fn -> this adopta el valor de ejecución y no de creación
//          arrow fn -> this adopta el valor de creación y no modifica en ejecución

/*
- Tienen una sintaxis más corta: function(){} -> ()=>{}
- Heredan el valor this del contexto en el que fueron creadas, no se reasignan
*/

let estudiante = {
  name: 'Uriel',
  saludar: () => {
    console.log('Hola soy' + this.name);
  },
  saludarAlt: function () {
    console.log('Hola soy' + this.name);
  },
};

console.log(estudiante.saludar); //Hola soy undefined ------ this en fn flecha adopta el contexto léxico de su entorno cuando es definido, 
estudiante.saludarAlt; // Hola soy Uriel

function Estudiante() {
  this.nombre = 'Ada';
  this.saludar = () => console.log(`Hola ${this.nombre}`);
}
let e = new Estudiante();

let a = e.saludar;
a(); //Hola Ada ---- No se reasigna porque es fn flecha
