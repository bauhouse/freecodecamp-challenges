
function dropElements(arr, func) {
  // Drop them elements.
  var count = arr.length;

  for (var i = 0; i < count; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
