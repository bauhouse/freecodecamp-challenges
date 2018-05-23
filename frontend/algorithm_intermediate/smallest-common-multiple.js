
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var divisors = [];

  var sequence = [];
  for (var i = min; i <= max; i++) {
    sequence.push(i);
  }

  var product = sequence.reduce(function(acc,val){return acc * val;});

  var multiples = [];

  for (var i = sequence.length; i >= 0; i--) {
    multiples.push(multiply(sequence[i], product));
  }

  return multiples;
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


console.log(smallestCommons([5,1]));
