console.log('\n', 0, 'ARRAYS', '\n');
// - Pueden almacenar cualquier tipo de dato de primera clase:
//  number, strings, booleans, functions, objects, arrays
//
// - length = cantidad de elementos dentro
// - Posición de los elementos= array.posicion empezando por index 0
//  Última posición = length -1
//

let basicArray = [];

// En JS Puede contener cualquier tipo de dato de primera clase
let arrayExample = ['javascript', 1, {}, function () {}, [1, 2, 3]];

//Ejemplo: Array de lenguajes de programación
console.log('\n EJEMPLO \n');
let languages = ['javascript', 'python', 'c+'];
console.log('Array original: ', languages);
console.log('Longitud del array (length):', languages.length);

//ACCEDER A UN ELEMENTO
console.log('\nPrimer elemento del array ([0]): ', languages[0]); //javascript

//MODIFICAR UN ELEMENTO
languages[0] = 'js';
console.log('Primer elemento modificado ([0]=x): ', languages[0]); //js

// AÑADIR UN ELEMENTO
//UNSHIFT - añadir al principio
languages.unshift('ruby');
console.log('\ntodo el array agregando ruby al principio (unshift): ');
console.log(languages);
console.log('Longitud del array:', languages.length);

//PUSH - añadir al final
languages.push('c++');
console.log('\n todo el array agregando c++ al final (push): ');
console.log(languages);
console.log('Longitud del array:', languages.length);

//ELIMINAR ELEMENTO
//SHIFT - añadir el primero
languages.shift();
console.log('\ntodo el array eliminando ruby del principio: ');
console.log(languages);
console.log('Longitud del array:', languages.length);

//POP - eliminar último
languages.pop();
console.log('\n todo el array eliminando último elemento: ');
console.log(languages);
console.log('Longitud del array:', languages.length);

//Si usamos estos métodos como definición de una variable
// Los de añadir te devuelven la nueva longitud del array
// Los de eliminar mueven el elemento a la variable

let addFirstLang = languages.push('c++');
console.log('Nueva longitud después de push:', addFirstLang); //devuelve la nueva longitud
let addLastLang = languages.unshift('ruby');
console.log('Nueva longitud después de pop:', addLastLang); //devuelve la nueva longitud

console.log('\nArray original:', languages);
let firstLanguage = languages.shift();
let lastLanguage = languages.pop();

console.log(
  'shift:',
  firstLanguage,
  ', pop: ',
  lastLanguage,
  ', array final:',
  languages
);

//BUCLES
console.log('\n', 0, 'BUCLES', '\n');

// let languages = ['javascript', 'python', 'c+'];

//bucle recorriendo todos los elementos hacia adelante
console.log('bucle "for" básico');
for (let i = 0; i < languages.length; i++) {
  let elemento = languages[i];
  console.log(elemento);
}
//bucle recorriendo todos los elementos hacia atrás
console.log('bucle "for" inverso');

for (let i = languages.length - 1; i >= 0; i--) {
  let elemento = languages[i];
  console.log(elemento);
}

//FOREACH
console.log('\nFOREACH\n');
console.log('forEach básico');
languages.forEach(function (language) {
  console.log(language);
});
//se pueden añadir 3 parámetros a la función, que corresponden a:
//primer param: elemento actual del array
//segundo param: índice actual del elemento del array
//tercer param: array completo

//Se puede añadir un segundo parámetro al método forEach que se asigna al valor "this", si no se asigna por defecto es el objeto "window"

console.log('\nforEach completo');
languages.forEach(function (language, index, array) {
  console.log(
    'lenguaje: ',
    language,
    ', índice: ',
    index,
    ', array completo: ',
    array,
    this
  );
}, 'valor de this');

//MAP
//mapea un array y devuelve un array nuevo
console.log('\nMAP\n');

let numbers = [2, 3, 4];
const double = [];

for (let i = 0; i < numbers.length; i++) {
  // double.push(numbers[i] * 2);
  double[i] = numbers[i] * 2;
}
console.log(numbers);
console.log(double);

let doubleMap = numbers.map((number) => number * 2);
console.log(doubleMap);
numbers.map((number) => number * 2);
console.log(numbers); //no se modifica el array original

let numberStrings = ['10', '15', '20'];
let numberNumbers = numberStrings.map((string) => parseFloat(string));
console.log(numberStrings, '\n', numberNumbers);

//FILTER
//filtra cada elemento de un array
//si obtiene un true, añade el elemento al nuevo array
//si obtiene false lo descarta del nuevo array
console.log('\nFILTER\n');

let numbersForFilter = [8, 1, 6, 2, 7, 2, 3];
console.log(numbersForFilter);
//filtrar por pares
let even = numbersForFilter.filter((number) => number % 2 === 0);
let evenV2 = numbersForFilter.filter((number) => !(number % 2));
console.log(even);
console.log(evenV2);
let odd = numbersForFilter.filter((number) => number % 2);
console.log(odd);

//eliminar si encuentra x elemento
// let languages = ['javascript', 'python', 'c+'];
let deleteJS = languages.filter((language) => language !== 'js');
console.log(languages);
console.log(deleteJS);

//reduce
// para reducir un listado a uno solo
// array.reduce((acc, element)=>{loquesea, initialValueAcc})
// reduce NECSITA UN RETURN, itera cada elemento y el retorno de la fn será el siguiente acc en cada iteración
//el segundo parámetro del reduce en este caso es el valor que se le asigna a acc por primera vez (en lugar de this como en otros métodos)
console.log('\nREDUCE\n');

let numbersForReduce = [1, 2, 3, 4, 5];
let sumNumbers = numbersForReduce.reduce((acc, number) => acc + number, 0);
console.log(sumNumbers);

//indexOf -> === -> índice/-1
//devuelve el índice del primer valor que es estrictamente igual, o devuelve -1 si no lo hay
// array.indexOf(searchElement, initialPositionToSearch)

console.log('\nINDEXOF\n');
// let languages = ['javascript', 'python', 'c+'];
let indexRuby = languages.indexOf('ruby');
let indexC = languages.indexOf('c+');
console.log('index of Ruby: ', indexRuby, ', index of C+: ', indexC);

//includes -> === ->  true/false
console.log('\nINCLUDES\n');
let includesRuby = languages.includes('ruby');
let includesC = languages.includes('c+');
console.log('includes Ruby: ', includesRuby, ', includes C+: ', includesC);

//indexOf -> === -> índice|-1
//includes -> === ->  true|false
//find -> () => {} -> elemento encontrado
//findIndex -> () => {} -> posición
//some -> () => {} -> true|false

//SPREAD Y REST PARAMS
console.log('\nSPREAD\n');
//expande (separa por comas) los elementos de un array

let spreadArray = [1, 2, 3];
let spreadString = 'Irene';
console.log(spreadArray);
console.log(...spreadArray);
console.log(...spreadString);

console.log('\nREST PARAMS\n');
//unifica los parámetros en un array
function student(name, ...rest) {
  console.log(name, rest);
}
student('Irene', 2, 7, 3, 9, 21, 6);

//
//DESTRUCTURING ASSIGNMENT [nombreVariable] = array;
console.log('\nDESTRUCTURING ASSIGNMENT\n');

let calificaciones = [10, 4, 8, 1, 6];

//asigna a los nombres de las variables en el mismo orden que el array
let [mates, lengua] = calificaciones;
// spread op aquí también
let [música, ...resto] = calificaciones;

// se aplica a los parámetros de las funciones de igual manera
function suma([v1, v2]) {
  return [v1, v2, v1 + v2];
}
//se puede asignar el return de una función si es array/obj
let [v1, v2, result] = suma(calificaciones);

console.log(mates); // 10
console.log(lengua); // 4
console.log(música); // 10
console.log(resto); // [ 4, 8, 1, 6 ]
console.log(suma(calificaciones)); // [ 10, 4, 14 ]
console.log('resultado de la suma: ', result); // resultado de la suma:  14
