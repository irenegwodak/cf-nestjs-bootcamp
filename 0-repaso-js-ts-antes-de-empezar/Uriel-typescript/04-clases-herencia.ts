class Video {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
  play() {
    console.log('Playing normal Video');
  }
  stop() {
    console.log('Stopped');
  }
}

class YouTube extends Video {}

let miVideo: YouTube = new YouTube('Clases y objetos');

miVideo.play();

// 02 Sobreescribir métodos + SUPER

class Vimeo extends Video {
  play() {
    super.play();
    console.log('Playing Vimeo Video');
  }
}
let miVimeo: Vimeo = new Vimeo('título');

miVimeo.play();

// 03 Sobreescribir CONSTRUCTOR

class YahooVideos extends Video {
  constructor(title: string) {
    super(title);
    console.log('Inicializando Yahoo Videos');
  }
}
let miYahoo: YahooVideos = new YahooVideos('título de yahoo');

console.log(miYahoo.title);
