
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  var sequence = [];
  for (var i = min; i <= max; i++) {
    sequence.push(i);
  }

  var index = sequence.length - 1;
  var product = sequence.reduce(function(acc,val){return acc * val;});

  var multiples = [];

  multiples[0] = multiply(max, product);
  multiples[1] = multiply(max - 1, product);
  for (var i = index; i >= 0; i--) {
    multiples.push(multiply(sequence[i], product));
  }

  var common = findCommonValues(multiples[0], multiples[1]);
  for (var i = 0; i < sequence.length - 1; i++) {
    if (i == 0) {
      common = findCommonValues(multiples[i], multiples[i + 1]);
    } else {
      common = findCommonValues(common, multiples[i + 1])
    }
  }

  return common.pop();
}

function isDivisible(number, divisor) {
  return number % divisor === 0;
}

function divide(dividend, min, max) {
  var results = [];
  var divisibleByAll = true;

  for (var i = min; i <= max; i++) {
    var quotient = null;
    var divisible = isDivisible(dividend, i);
    if (divisible) {
      quotient = dividend / i;
    } else {
      return false;
    }
    results.push([i, divisible, quotient]);
  }
  return results;
}

function multiply(factor, max) {
  var results = [];
  var i = max / factor;
  while ( i > 0 ) {
    var product = factor * i;
    results.push(product);
    i--;
  }
  return results;
}

function findCommonValues(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

console.log(smallestCommons([10,5]));
