class Curso {
  propiedadPublica = 'Público';
  #propiedadPrivada = 'Privada';

  constructor() {
    this.#bienvenidaPrivada();
  }
  bienvenidaPublica() {
    console.log('método de bienvenida pública, propiedad privada: ', this.#propiedadPrivada);
  }
  #bienvenidaPrivada() {
    console.log('método de bienvenida privada, propiedad privada: ', this.#propiedadPrivada);
  }
}

let test = new Curso(); //imprime la bienvenida privada por el constructor
console.log(test.propiedadPublica);
console.log(test.propiedadPrivada); // undefined
test.bienvenidaPublica();
