// Parecido a una interface, un molde para definir una estructura
// Datos tipo public (por defecto)/private/protected
// Public - Accesible desde cualquier sitio
// Private - Solo accesible a la clase
// Protected - Accesible a la clase y a las extendidas

class Animal {
  public animalName = 'Generic Animal';
  private age = 10;
  protected identity = '111';

  constructor() {}

  sayHi() {
    console.log('Grrr', this.age);
  }
}

const myAnimal: Animal = new Animal();
myAnimal.animalName;
myAnimal.sayHi();

// Escribiendo myAnimal. nos sugiere las distintas propiedades
// Si una propiedad es "private" no se sugiere pero sí se muestra en un console.log

// Extensiones

class Dog extends Animal {
  type: 'Pastor alemán' | undefined;

  constructor() {
    // Los constructores de las clases derivadas deben contener una llamada a "super"
    super();
  }

  sayHi() {
    this.identity;
  }
}

const myDog: Dog = new Dog();
// myDog. muestra las 3 propiedades e indica de dónde vienen
