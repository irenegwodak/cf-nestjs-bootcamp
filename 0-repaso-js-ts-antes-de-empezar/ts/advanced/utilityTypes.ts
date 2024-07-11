//PARTIAL

// Añadiendo un "Partial<T>" podemos enviar datos de forma parcial de un interface sin modificar la integridad del interface original

interface Task {
  id: number;
  name: string;
  description: string;
}

//Ejemplo: Queremos actualizar un dato en bbdd
//Si ponemos que es de tipo Task, TS pedirá todos los datos, pero solo podemos enviar uno, con el Partial permite enviar alguno/s
function updateTask(id: string, task: Partial<Task>) {
  console.log('actualizando tarea');
}
const newTask = { name: 'Kev' };
updateTask('1', newTask);

// Y de esta forma seguimos teniendo la interface Task con todos los campos obligatorios en caso de crear uno nuevo
const task: Task = {
  description: 'hola',
};

//////////
//REQUIRED
//Required<T>

interface ToDo {
  id?: number;
  name?: string;
}

//con Required obliga a poner todos los datos aunque sean opcionales en la interface original
const myToDo: Required<ToDo> = {};

///////////
// Records<Keys, Types> Para la creación de objetos
// {key : value}

interface CatInfo {
  age: number;
  name: string;
}

type CatName = 'moi' | 'baris' | 'luffy';

const cats: Record<CatName, CatInfo> = {
  moi: { age: 2, name: '' },
  baris: { age: 2, name: '' },
  luffy: { age: 2, name: '' },
};

//Pick <T,Properties>
//Coge las propiedades que le pedimos de una interface

interface ToDoTwo {
  title: string;
  description: string;
  completed: boolean;
}

type ToDoPreview = Pick<ToDoTwo, 'title' | 'description'>;

const otherToDo: ToDoPreview = {
  // sugiere title y description, completed da error
  title: 'clean room',
  completed: false,
};

//Omit<T, Properties>
//Omite todo menos las indicadas

type TodoOmitted = Omit<ToDoTwo, 'description'>;

const todoOmitted: TodoOmitted = {
  //sugiere completed y title
};
