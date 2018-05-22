
function sumFibs(num) {
  var fib = 1;
  var sequence = [fib];

  for ( var i = 0; i < num; i++ ) {
    if (i) { fib = fib + sequence[i - 1] };
    if ( fib < num ) { sequence.push(fib) };
  }

  var sum = sequence.reduce( function(acc,val) { return acc + val });

  return sum;
}

sumFibs(4);
