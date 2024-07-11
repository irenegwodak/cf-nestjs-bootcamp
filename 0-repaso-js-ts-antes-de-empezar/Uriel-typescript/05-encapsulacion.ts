class Video05 {
  protected pretitle: string;
  public title: string;
  private subtitle: string;

  constructor(title: string, subtitle: string, pretitle: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.pretitle = pretitle;
  }
}

class Youtube05 extends Video05 {
  printPreTitle() {
    console.log(this.pretitle);
  }
  // printSubTitle() {
  //   console.log(this.subtitle); // error porque es privado
  // }
}

let miVideo05 = new Video05('el título', 'el subtitulo', 'el pretítulo');

console.log(miVideo05.title);
// console.log(miVideo05.subtitle); // error por private
// console.log(miVideo05.pretitle); // error por protected

let miYoutube05 = new Youtube05('titulo yt', 'subtitulo yt', 'pretitulo yt');
miYoutube05.printPreTitle();
