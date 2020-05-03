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

const primefactors = function (num) {
  let factors = []
  for (let f = 2; f <= num;) {
    if (num % f === 0) {
      factors.push(f);
      num /= f;
    }
    else { // not a divisor, move on
      f++;
    }
  }
  return factors;
}

const gcd = function (a, b) {
  let cd = 1;
  debugger
  for (let apf = primefactors(a), bpf = primefactors(b); apf.length > 0 && bpf.length > 0;) {
    if (apf[apf.length - 1] === bpf[bpf.length - 1]) {
      return apf[apf.length - 1];
    }
    if (apf[apf.length - 1] > bpf[bpf.length - 1]) {
      apf.pop();
    } else {
      bpf.pop();
    }
  }
  return cd;
}

const gcdEuc = function (m, n) {
  // https://iq.opengenus.org/euclidean-algorithm-greatest-common-divisor-gcd/
  //  https://www.youtube.com/watch?v=JUzYl1TYMcU&t=17s
  if (m*n === 0){ return m + n;}
  if (m < n) {[m, n] = [n, m];}
  return gcdEuc(n, m % n);   
}

const gcdLoop = function(m, n){
  debugger
  for(; m*n > 0;){
    if(m > n){
      [m, n] = [n, m%n]
    }
    else{
      [m, n] = [n, m];
    }    
  }
  return m+n;
}

const lcm = function (a, b) {
  for (let cm = a; ; cm += a) {
    if (cm % b === 0) return cm;
  }
}

const lcmRec = function (a, b){
  let c = a;
  const cm = function (c, b){
     if(c%b === 0) return c;
     else return cm(c+a, b)
  }
  return cm(c, b);
}

const selfDividing = function (num) {
  debugger
  for (let remainder = num, digit = 1; remainder > 1; remainder = Math.floor(remainder / 10)) {
    digit = remainder % 10;
    if (digit === 0 || num % digit > 0) {
      return false;
    }
  }
  return true;
}
