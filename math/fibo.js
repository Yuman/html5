fibo = {
  let sequence = [1, 2];

  next: () => sequence[sequence.length - 2] + sequence[sequence.length - 1]

  grow: () => sequence.push(next());

}