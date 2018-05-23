
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
  for (var j = index; j >= 0; j--) {
    multiples.push(multiply(sequence[j], product));
  }

  var common = findCommonValues(multiples[0], multiples[1]);
  for (var k = 0; k < sequence.length - 1; k++) {
    if (i == 0) {
      common = findCommonValues(multiples[k], multiples[k + 1]);
    } else {
      common = findCommonValues(common, multiples[k + 1]);
    }
  }

  return common.pop();
}

function isDivisible(number, divisor) {
  return number % divisor === 0;
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

smallestCommons([1,5]);
