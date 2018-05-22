
function sumPrimes(num) {
  var integers = [];
  var primes = [];

  for (var i = 1; i < num; i++) {
    var divisors = integers.filter( value=> value < i );
    primes.push([i, divisors.filter( value => i % value == 0 && value != 1 )]);
    integers.push(i);
  }

  // primes = integers.filter( value => );


  return primes;
}

console.log(sumPrimes(10));
