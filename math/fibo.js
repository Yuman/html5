const fibo = {
    
  sequence: [1, 2],

  next() {return this.sequence[this.sequence.length - 2] + this.sequence[this.sequence.length - 1]},

  grow() {this.sequence.push(this.next())}

}