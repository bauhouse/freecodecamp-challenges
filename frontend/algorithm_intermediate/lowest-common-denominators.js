
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  // Create an array of values from max to min
  var sequence = range(max, min, true);

  // Return the product of the range of values
  var product = productOfArray(sequence);

  // Find common divisors
  var divisors = findDivisors(max);

  // Find lowest common denominators
  var lcd = findLCD(max);

  // Find all the factors of the number as a set of lowest common denominators
  var denominators = findDenominators(max);

  return denominators;
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
    return divisors;
  }
  return null;
}

function findLCD(num) {
  var divisors = findDivisors(num);
  if (divisors) {
    var primes = primeNumbers(num);
    var lcd = findCommonValues(divisors,primes);
    return lcd;
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

function findDenominators(num) {
  var dividend = num;
  var quotient = dividend;
  var divisors = findLCD(num);
  var division = [];
  var denominators = [];
  if (num == 1) {
    return "The number 1 has no lowest common denominators."
  }
  while (dividend > 1) {
    divisors = findLCD(dividend);
    if (divisors) {
      for (var i = divisors.length - 1; i >= 0; i--) {
        var divisor = divisors[i];
        quotient = dividend / divisor;
        if (!findLCD(divisor)) {
          division.push([dividend, divisor, quotient]);
          denominators.push(divisor)
          dividend = quotient;
        }
      }
    } else {
      return "The number " + num + " is a prime number.";
    }
    if (!findLCD(dividend)) {
      if (dividend == 1) {
        break;
      } else {
        quotient = dividend / divisor;
        division.push([dividend, divisor, quotient]);
        denominators.push(divisor)
        break;
      }
    }
  }
  if (denominators.length) {
    var product = productOfArray(denominators);
    if (product === num) {
      return division;
    }
  }
  return null;
}

function findCommonValues(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

function productOfArray(arr) {
  if (arr.length) {
    var product = arr.reduce(function(acc,val){return acc * val;});
    return product;
  }
  return null;
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

function primeNumbers(num) {
  var integers = [];
  var primes = [];

  for (var i = 1; i <= num; i++) {
    var divisors = integers.filter( value => value < i ).filter( value => i % value == 0 && value != 1 );
    var isPrime = !(divisors.length > 0) && i != 1;
    if (isPrime) {
      primes.push(i);
    }
    integers.push(i);
  }

  return primes;
}

console.log(smallestCommons([1,60]));
