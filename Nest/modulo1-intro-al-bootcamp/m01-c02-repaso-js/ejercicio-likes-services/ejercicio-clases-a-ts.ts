class LikesServiceTS {
  likes: number;
  dislikes: number;
  constructor() {
    this.likes = 0;
    this.dislikes = 0;
  }

  like(): void {
    this.likes++;
  }

  dislike(): void {
    this.dislikes++;
  }

  getLikes(): number {
    return this.likes;
  }

  getDislikes(): number {
    return this.dislikes;
  }
}

class Comment extends LikesServiceTS {
  message: string;
  constructor(msg: string) {
    super();
    this.message = msg;
  }
}

class CommentsServiceTS {
  comments: Object[];
  commentsQty: number;

  constructor() {
    this.comments = [];
    this.commentsQty = 0;
  }

  addComment(comment) {
    this.commentsQty++;

    this.comments.push({ id: this.commentsQty, comment });
  }

  getComments() {
    return this.comments;
  }
}

console.log('\n');

console.log('Creamos una nueva instancia de nuestro servicio de comentarios');
const threadTs = new CommentsServiceTS();
console.log(threadTs);
console.log('\n');

console.log(
  'Si llamamos a la funcion getComments vemos que viene vacia porque todavia no agregamos nada'
);
console.log(threadTs.getComments());
console.log('\n');

console.log(
  'Creamos una nueva instancia de un comentario con un mensaje que querramos'
);
const firstCommentTs = new Comment('this is a test');
console.log(firstCommentTs);
console.log('\n');

console.log('Agregamos nuestro comentario a nuestro threadTs');
threadTs.addComment(firstCommentTs);
console.log(threadTs);
console.log('\n');

console.log('Ahora nuestro threadTs tiene un comentario');
console.log(threadTs.getComments());
console.log('\n');

console.log('Le damos like a nuestro comentario');
firstCommentTs.like();
console.log(firstCommentTs);
console.log('\n');

console.log(
  'Vemos que nuestro comentario tiene un like dentro de nuestro threadTs'
);
console.log(threadTs.getComments());
