const $l = require('./index.cjs');

const a = 5,
  b = 5;

console.log($l.currency('+', [a, b]));
// => 10

console.log($l.currency('-', [a, b]));
// => 0

console.log($l.currency('*', [a, b]));
// => 25

console.log($l.currency('/', [a, b]));
// => 1

