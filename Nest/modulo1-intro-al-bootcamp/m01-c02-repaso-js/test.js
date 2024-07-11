function crearPersona(nombre, edad) {
    return {
      nombre: nombre,
      edad: edad,
      saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      }
    };
  }

  const msg = (nombre, edad) = console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

  
  const persona1 = crearPersona('Juan', 30);
  const persona2 = crearPersona('María', 25);
  
  persona1.saludar(); // Imprime: Hola, mi nombre es Juan y tengo 30 años.
  persona2.saludar(); // Imprime: Hola, mi nombre es María y tengo 25 años.
  

  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  