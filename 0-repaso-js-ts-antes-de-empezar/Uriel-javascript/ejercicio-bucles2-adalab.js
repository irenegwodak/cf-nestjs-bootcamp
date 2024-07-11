// function getNNumbers(n) {
//   let generate = [];
//   for (let i = 1; i <= n; i++) {
//     generate.push(i);
//   }
//   return generate;
// }

// const hundredNumbers = getNNumbers(10);

// hundredNumbers.forEach((number) => {
//   console.log(number);
// });

// function getReversedNNumbers(n) {
//   const generateNumbers = getNNumbers(n);
//   const reversedNumbers = generateNumbers.reverse();
//   return reversedNumbers;
// }

// const hundredReversedNumbers = getReversedNNumbers(10);

// hundredReversedNumbers.forEach((number) => {
//   console.log(number);
// });

//Christmas tree

// const m = 3;
// const n = Math.floor(m / 2);
// console.log(n);

function firstAndLast(rows, symbol) {
  let row = '';
  for (let space = 1; space < rows; space++) {
    row += ' ';
  }
  row += symbol;
  console.log(row);
}

function nRowsChristmasTree(rows) {
  firstAndLast(rows, '*');

  for (let row = 1; row <= rows; row++) {
    let spaces = rows - row;
    let triangles = (row - 1) * 2;
    let generatedRow = '';
    for (let space = spaces; space > 0; space--) {
      generatedRow += ' ';
    }
    for (let triangle = 0; triangle <= triangles; triangle++) {
      generatedRow += '▲';
    }
    console.log(generatedRow);
  }
  firstAndLast(rows, '|');
}

nRowsChristmasTree(5);
