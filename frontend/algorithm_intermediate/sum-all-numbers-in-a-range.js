function sumAll(arr) {
  var a = Math.min(...arr);
  var b = Math.max(...arr);
  var set = [];

  for (i = a; i <= b; i++) {
    set.push(i);
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  var sum = set.reduce(reducer);

  return sum;
}

sumAll([1, 4]);
