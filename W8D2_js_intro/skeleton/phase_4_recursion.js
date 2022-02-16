function range(start, end) {
  if (start === end) {
    return [end]
  }
  range(start, end - 1);

}

console.log(range(0, 10));