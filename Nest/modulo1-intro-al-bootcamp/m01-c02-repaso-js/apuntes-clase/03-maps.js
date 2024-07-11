//MAPS
// Map es una colección de pares clave-valor (se asemeja a un objeto pero no se accede igual)
// Map tiene métodos específicos como: get(), set(), clear(), delete(), entries(), keys(), values(), forEach(), 

let myMapTest = new Map();
myMapTest.set('name', 'Juani');
myMapTest.set('age', '29');
myMapTest.set('name', 'Test');


console.log(myMapTest.entries()); // objeto formado de dos arrays: array claves y array valores
console.log(myMapTest.keys()); // objeto de las claves
console.log(myMapTest.values()); // objeto de los valores
console.log(myMapTest.get('29')); // undefined porque get busca en las claves

const obj = {
  name: 'Juani',
  age: '29',
  name: 'Test',
};

console.log(myMapTest);
console.log(obj);

// forma de acceder al valor de la clave "name"
console.log('obj: ', obj.name);
console.log('Map: ', myMapTest.get('name'));


