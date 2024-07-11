// RESUMEN: 
//          fn -> this adopta el valor de ejecución y no de creación
//          arrow fn -> this adopta el valor de creación y no modifica en ejecución

//this es un objeto que aplica al contexto en el que se encuentra

//en global scope, el objeto es "window"
console.log('globalscope this: ', this);

//escrito de otra forma:
//dentro de una función, this hace referencia a window
function demo() {
  console.log(this);
}
// demo();
//que sería lo mismo que:
// window.demo(); //(funciona en el navegador)

// creando un objeto el scope de this dentro de una función es ese objeto
let objeto = {
  demo() {
    console.log(this);
  },
};

objeto.demo(); //Scope:  El objeto que ejecuta la función

//El valor THIS se asigna en el momento de EJECUTAR la función, QUÉ OBJETO lo ejecuta

function demoTwo() {
  console.log(this);
}
let objetoTwo = {
  fn: demoTwo,
};
console.log(objetoTwo.fn); //This es objetoTwo y no Window porque la fn se llama dentro del objeto ObjetoTwo

//reasignando una función, enviándola como argumento o a una variable cambia el objeto que la manda llamar

let estudiante = {
  name: 'Tarongino',
  saludar: function () {
    console.log(`Hola soy ${this.name}`);
  },
};

let f = estudiante.saludar; // f = function (){console.log(`Hola soy ${this.name}`)};
f(); //Hola soy undefined
// La variable f es una función, el scope de esa función en f es global, no encuentra "name"
