
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  
  // Create an array of values from max to min
  var sequence = range(max, min, true);
  
  // Return the product of the range of values
  var product = productOfArray(sequence);
  
  // Find common divisors
  var common = findDivisors(max);
  
  // Find lowest common denominators
  var lcd = divide(max, common);

  return lcd;
}

function findDivisors(num) {
  var divisors = [];
  var i = 2;
  while (i < num) {
    if (isDivisible(num, i)) {
      divisors.push(i);
    }
    i++;
  }
  if (divisors.length) {
    var denominators = divide(num,divisors);
    return denominators;
  }
  return null;
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

function divide(num, divisors) {
  var i = divisors.length;
  var quotient = 0;
  var denominators = [];
  while (i > 0) {
    quotient = num / divisors[i];
    denominators.push(divisors[i]);
    i--;
  }
  return denominators;
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

smallestCommons([1,9]);
