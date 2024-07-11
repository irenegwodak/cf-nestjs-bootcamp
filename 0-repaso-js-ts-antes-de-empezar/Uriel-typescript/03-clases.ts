// 01 Método constructor

class Video01 {
  constructor(title: string) {
    console.log(title);
  }
}

let miVideo01 = new Video01('Título01');

// 02 Propiedades y métodos

class Video02 {
    title: string;

  constructor(title/* : string */) {
    this.title = title;
  }
  printTitle() {
    console.log(this.title);
  }

  changeTitle(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

let miVideo02 = new Video02('Título 02');

miVideo02.printTitle();
miVideo02.changeTitle('Nuevo título 02');
console.log(miVideo02.getTitle());
miVideo02.printTitle();
