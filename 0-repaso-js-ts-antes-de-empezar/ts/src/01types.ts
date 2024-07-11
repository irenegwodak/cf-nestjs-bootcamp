console.log('holaa');

let age: string = '34';
let month: number = 1;
let isJunior: boolean = true;
let persons: Object = {};

let fruits: Object[] = [{}, { type: 'manzana' }];

//Arrays
let food: string[] = [];
let animales: string[] = ['chanchito', 'feliz', 'felipe'];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = []

// nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato

let response: any = 'Hola';
response = 20;
response = true;
response = ['Hola', 123];

// response.show(); /* Como es de tipo any permite añadir métodos, no da error de escritura, pero sí de compilación*/

// :void principalmente se aplica a las funciones, no retorna nada
function saludor(): void {
  console.log('hola');
}

// unknown es más controlado que any
let response2: unknown;
response2 = true;

let response3 = null; /* valor vacío */
let response4 = undefined; /* no se ha determinado valor */

// tipos combinados
let response5: number | undefined;
response5?.toString(); /* operador ? para comprobar antes de ejecutar el método */

// DEFINIR NUEVOS TIPOS
// esto es útil si se utiliza una combinación de tipos en varios sitios, poder cambiarlos todos a la vez
type ResponseTypeService = string | undefined;

let responseProducts: ResponseTypeService;
let responseClients: ResponseTypeService;

// TYPE ASSERTION
// para que se autocompleten los métodos se puede "forzar" un tipo de dato para un punto concreto
let message: any = '';

let messageUppercase1 = (message as string).toUpperCase;
//escrito de otra forma
let messageUppercase2 = <string>message;
messageUppercase2.toUpperCase();

//otro ejemplo
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
//escrito de otra forma
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;
