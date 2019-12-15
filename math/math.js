function sqrt(x){
   for (let guess = (1.0 + x)/2, root = 0; ; guess = root){
     root = (x/guess + guess)/2; //https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
     console.log(`root = ${root}; guess = ${guess}`);
     if(Math.abs(root - guess) < 0.000001) return root;
   }
};
