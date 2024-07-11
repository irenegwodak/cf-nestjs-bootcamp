/*
 * Tenemos una funcion que sirve para determinar si una palabra es un palíndromo sin utilizar funciones predefinidas de javascript
 * ¿Se les ocurre cómo mejorarla?
 */

const word = 'cacao';

function isPalindrome(word) {
  let reversedWord = '';

  for (let i = 0; i < word.length; i++) {
    reversedWord += word[word.length - i - 1];
  }

  return reversedWord === word;
}

console.log(isPalindrome(word));

/*
 * Tenemos un array de estudiantes con su nombre, edad y numero de pasaporte. Tambien tenemos una funcion que nos devuelve la edad de
 * un estudiante a partir de su numero de pasaporte.
 * Como podemos mejorar nuestra funcion? Total libertad para cambiar lo que quieran
 */

const students = [
  {
    name: 'Juani',
    passportId: 1,
    age: 29,
  },
  {
    name: 'Carla',
    passportId: 2,
    age: 25,
  },
];

// function getStudentAge(passportId) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].passportId === passportId) {
//       return students[i].age;
//     }
//   }
// }

// function getStudentAge(passportId) {
//   const found = students.find((student) => student.passportId === passportId);
//   return found.age;
// }

function getStudentAge(passport) {
    const found = students.find(({passportId}) => passportId === passport);
    return found.age;
  }

console.log(getStudentAge(1));
