
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  // Create an array of values from max to min
  var sequence = range(max, min, true);

  // Find greatest common divisor
  function gcd(x, y) {
    if (y === 0)
      return x;
    else
      return gcd(y, x%y);
  }

  // Filter lowest common multiples
  var num = max;
  sequence
    .filter((value, index) => {
      return index > 0;
    })
    .map((value, index) => {
      var greatestCommonDivisor = gcd(num, value);
      num = (num * value) / greatestCommonDivisor;
      return num;
    });

  return num;
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

console.log(smallestCommons([1,5]));
