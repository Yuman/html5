// note the magic sequence: 24816. 2*8 = 4*4 = 16
// Yuros, Yu's rule of square: For a square s and root r, there is a u under r, an o over r such that u*o=s
//https://www.mathsisfun.com/square-root.html
//https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
function sqrt(x) {
  for (let guess = (1.0 + x) / 2, root = 0; ; guess = root) {
    root = (x / guess + guess) / 2;
    console.log(`root = ${root}; guess = ${guess}`);
    if (Math.abs(root - guess) < 0.000001) return root;
  }
};

function isPrime(value) {
  for (var i = 2; i < Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

const getPrimes = (n = 0) => {
  const primes = n < 2 ? [] : [2];

  for (let i = 3; i <= n; i += 2) {
    if (primes.every(x => i % x))
      primes.push(i);
  }

  return primes;
}

//test if a char is a digit
//const isCharDigit = n => n < 10;  // a digit char is converted to a number
//const isDigit = n => +n == n;
const isDigit = n => !isNaN(n);
//const isCharDigit = n => !!++n;
function isCharDigit(n) {
  return !!n.trim() && n > -1;
}

const pi = function () {
  let pi = 3
  for (let i = 1; i < 99; i++) { pi += 4 / (i * 2 * (i * 2 + 1) * (i * 2 + 2)) * (-1) ** (i + 1); }
  return pi;
}

const fib = function (n) {
  let fib = [1, 2, 3]
  for (let i = 3; i <= n; i++) {
    fib.push(fib[fib.length - 2] + fib[fib.length - 1])
  }
  return fib;
}