// class Curso {} // class declaration - declaración más habitual
// let Curso = class {}; // class expression

class Curso {
  constructor(titulo) {
    this.titulo = titulo;
  }

  inscribir() {
    console.log('Inscrito');
  }
}

let javaScript = new Curso('Curso proffesioná de JS');

console.log(javaScript.titulo);
javaScript.inscribir();

// Definición de propiedades
// La forma común
class DefinePropertiesOld {
  constructor(titulo) {
    this.titulo = titulo;
  }
}
// La forma moderna
class DefineModernProperties {
  title = 'Title';
}

// Definición métodos
class ClassicDefineMethods {
  constructor() {
    this.inscribirFunction = function (input) {
      this.func = input;
      this.inscribirArrowFunction = (input) => {
        this.arrow = input;
      };
    };
  }
}
class ModernDefineMethods {
  inscribirShorthandSyntax(input) {
    this.shorthand = input; // Crea una propiedad "shorthand" en el objeto
  } 
}
methodsClassic = new ClassicDefineMethods();
methodsModern = new ModernDefineMethods();

methodsClassic.inscribirFunction("function");
methodsClassic.inscribirArrowFunction("arrow");
methodsModern.inscribirShorthandSyntax("shorthand");
console.log("classicfunc: ", methodsClassic.func);
console.log("classicarrow: ", methodsClassic.arrow);
console.log("modernshorth: ", methodsModern.shorthand);
