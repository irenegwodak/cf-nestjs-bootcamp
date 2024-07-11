// run `node index.js` in the terminal
const http = require('http');
const math = require('./modules/math');

console.log(math);

// Examples using a local module
console.log('Hello World!');
console.log(math.add(5, 5));
console.log(math.substract(5, 5));
console.log(math.demoAsync());
console.log(math.combineArrayWithASymbol([1, 2, 3], 'x'));

// Create a new server using a core module
// from Node.js
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 404;
//   response.setHeader('Content-Type', 'text/plain');
  response.end('<h1>Hello world</h1>');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
