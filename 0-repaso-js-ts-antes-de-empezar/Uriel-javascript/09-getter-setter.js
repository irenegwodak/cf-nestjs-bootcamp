class X {
  set name(name) {
    this._name = name; //usar _ es para ponerle un nombre interno ya que si no llama recursivamente al getter/setter
  }
  get name() {
    return this._name;
  }
}

let x = new X();

x.name = 'Juanito';
console.log(x.name);

// En lugar de crear una propiedad directamente, podemos utilizar getters y setters para:
// - Si cambia el nombre de la propiedad, no es necesario cambiarlo en todo el código:
//      this.name = name --> this._nombre = name
//
// - Se pueden crear lógica dentro de los métodos:
//      incluir validadores en el setter (p.ej. para obligar un tipo de dato)
//      exportar la info de una forma concreta en el getter

//mismo código cambiando la propiedad _name por _nombre solo en la clase y añadiendo validación de entrada y concretando salida
class Y {
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Error: El dato introducido no es una palabra');
    }
    this._nombre = name;
  }
  get name() {
    return this._nombre.charAt(0).toUpperCase() + this._nombre.toLowerCase().slice(1) //character at position 0 en mayus + nombre completo en minus cortando 1 letra al principio
  }
}
let y = new Y();

y.name = "irEne"; //log -> Irene
console.log(y.name);
