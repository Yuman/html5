const fibo = {

  sequence: [0, 1],

  next() { return this.sequence[this.sequence.length - 2] + this.sequence[this.sequence.length - 1] },

  nextDown() { return this.sequence[1] - this.sequence[0] },

  grow() { this.sequence.push(this.next()) },

  shrink() { if (this.sequence.length > 2) this.sequence.pop() },

  growDown() { this.sequence.unshift(this.nextDown()) },

  shrinkDown() { if (this.sequence.length > 2) this.sequence.shift() }

}