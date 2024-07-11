let basicArray = [];

// En JS Puede contener cualquier tipo de dato de primera clase
let arrayExample = ['javascript', 1, {}, function () {}, [1, 2, 3]];

let languages = ['javascript', 'python', 'c+'];
languages.length; //Longitud del array

languages[0]; // Acceder al primer elemento
languages[1]; // Acceder al segundo elemento
//...

languages[0] = 'js'; //Modificar elemento

languages.unshift('ruby'); //añadir elemento al principio
languages.push('c++'); //añadir elemento al final
languages.shift(); //extraer primer elemento
languages.pop(); //extraer último elemento
let addLastLang = languages.unshift('ruby'); //long array con nuevo elemento
let firstLang = languages.push('c++'); //long array con nuevo elemento

let firstLanguage = languages.shift(); //mover primer elemento a una var
let lastLanguage = languages.pop(); //mover último elemento a una var

// array.method((element, index, array) => console.log(language), this);
forEachLanguages.forEach((language) => console.log(language));
//array methods
let numbers = [2, 3, 4];
let mapDouble = numbers.map((number) => number * 2);
let filterEven = numbers.filter((number) => !(number % 2));
let reduceAddNumbers = numbers.reduce((acc, number) => acc + number, 0); //0 es valor inicial
// array.methodSearcher(searchElement, initialPositionToSearch);
let indexOfRuby = languages.indexOf('ruby'); //=== -> índice/-1
let includesC = languages.includes('c+', 1); //=== -> true/false
//indexOf -> === -> índice|-1
//includes -> === -> true|false
//find -> () => {} -> elemento encontrado
//findIndex -> () => {} -> posición
//some -> () => {} -> true|false