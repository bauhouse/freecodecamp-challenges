
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  
  // Create an array of values from max to min
  var sequence = range(max, min, true);
  
  // Return the product of the range of values
  var product = productOfArray(sequence);
  
  // Find common divisors
  var common = findDivisors(max);

  return common;
}

function findDivisors(num) {
  var divisors = [];
  divisors = range(num);
  return divisors;
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

function productOfArray(arr) {
  var product = arr.reduce(function(acc,val){return acc * val;});
  return product;
}

function range(max, min = 1, reverse = true) {
  var range = [];
  if (reverse) {
    for (var i = max; i >= min; i--) {
      range.push(i);
    }
  } else {
    for (var i = min; i <= max; i++) {
      range.push(i);
    }
  }
  return range;
}

smallestCommons([1,5]);
