//  class Nueva extends Padre{}

class Human {
  especie = 'Humano';
  respirar() {
    console.log('Inhala');
  }
}

class Admin extends Human {}

let admin = new Admin();

admin.respirar();

// SUPER
// se puede llamar a un método de la clase padre con super. dentro de la clase hijo
class X {
  saludar() {
    console.log('clase Y');
  }
}

class Y extends X {
  saludar() {
    super.saludar();
    console.log('clase X');
  }
}

let y = new Y();
y.saludar();

// se puede crear el constructor con super
class A {
  constructor(name) {
    this.name = name;
  }
}
class B extends A {
  constructor(name) {
    super(name);
  }

}
let b = new B("pepe");

console.log(b.name);