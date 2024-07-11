console.log('holaa');
var age = '34';
var month = 1;
var isJunior = true;
var persons = {};
var fruits = [{}, { type: 'manzana' }];
//Arrays
var food = [];
var animales = ['chanchito', 'feliz', 'felipe'];
var nums = [1, 2, 3];
var checks = [];
var nums2 = [];
// nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato
var response = 'Hola';
response = 20;
response = true;
response = ['Hola', 123];
// response.show(); /* Como es de tipo any permite añadir métodos, no da error de escritura, pero sí de compilación*/
// :void principalmente se aplica a las funciones, no retorna nada
function saludor() {
    console.log('hola');
}
// unknown es más controlado que any
var response2;
response2 = true;
var response3 = null; /* valor vacío */
var response4 = undefined; /* no se ha determinado valor */
// tipos combinados
var response5;
response5 === null || response5 === void 0 ? void 0 : response5.toString(); /* operador ? para comprobar antes de ejecutar el método */
var responseProducts;
var responseClients;
// TYPE ASSERTION
// para que se autocompleten los métodos se puede "forzar" un tipo de dato para un punto concreto
var message = '';
var messageUppercase1 = message.toUpperCase;
//escrito de otra forma
var messageUppercase2 = message;
messageUppercase2.toUpperCase();
//otro ejemplo
var canvas = document.getElementById('canvas');
//escrito de otra forma
var canvas2 = document.getElementById('canvas');
