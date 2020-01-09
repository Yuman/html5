function sqrt(x){
   for (let guess = (1.0 + x)/2, root = 0; ; guess = root){
     root = (x/guess + guess)/2; //https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
     console.log(`root = ${root}; guess = ${guess}`);
     if(Math.abs(root - guess) < 0.000001) return root;
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

