
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

console.log(primeNumbers(100));
