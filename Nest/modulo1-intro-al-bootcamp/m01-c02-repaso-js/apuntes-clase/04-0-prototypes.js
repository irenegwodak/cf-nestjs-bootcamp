// Prototypes

function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.saludar = function () {
  return `Hola, mi nombre es ${this.nombre}`;
};

Persona.prototype.saludarArrow = () => `Hola, mi nombre es ${this.nombre}`;

// Prototypes no admiten arrow function

const newPersona = new Persona('Juani');
const newPersona2 = new Persona('Juani2');

console.log(newPersona);
console.log(newPersona.nombre);
console.log(newPersona.saludar());
console.log(newPersona.saludarArrow());
console.log(newPersona.__proto__);

console.log(newPersona2.saludar());


