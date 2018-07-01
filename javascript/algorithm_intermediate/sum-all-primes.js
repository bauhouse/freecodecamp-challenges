
function sumPrimes(num) {
  var integers = [];
  var integerDivisors = [];
  var primes = [];

  for (var i = 1; i <= num; i++) {
    var divisors = integers.filter( value=> value < i ).filter( value => i % value == 0 && value != 1 );
    var isPrime = !(divisors.length > 0) && i != 1;
    integerDivisors.push([i, divisors, isPrime]);
    if (isPrime) {
      primes.push(i);
    }
    integers.push(i);
  }

  var sum = primes.reduce( function( acc, val ) { return acc + val; } );

  return sum;
}

sumPrimes(10);
