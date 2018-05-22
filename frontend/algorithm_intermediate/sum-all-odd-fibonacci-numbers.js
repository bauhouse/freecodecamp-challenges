
function sumFibs(num) {
  var fib = 1;
  var sequence = [fib];

  for ( var i = 0; i < num; i++ ) {
    if (i) { fib = fib + sequence[i - 1] };
    if ( fib < num ) { sequence.push(fib) };
  }

  var sum = sequence.reduce( function(acc,val) {return acc + val;});

  var oddNumbers = sequence.filter( value => value % 2 > 0 );
  var sumOdd = oddNumbers.reduce( function(acc,val) {return acc + val;});

  return sumOdd;
}

sumFibs(4);
