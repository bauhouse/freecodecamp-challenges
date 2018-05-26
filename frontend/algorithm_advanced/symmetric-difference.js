
function sym(args) {
  var arr = Array.prototype.slice.call(arguments);
  var arr1 = arr[0];
  var arr2 = arr[1];
  var diff = arr1.concat(arr2);
  var intersection = arr1.filter(value => {
    return arr2.includes(value);
  });
  intersection.map(item => {
    diff = diff.filter(value => {
      return value !== item;
    });
  });

  return diff;
}

sym([1, 2, 3], [5, 2, 1, 4]);
