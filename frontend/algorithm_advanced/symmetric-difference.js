
function sym(args) {
  var arr = Array.prototype.slice.call(arguments);
  var diff = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    diff = compareArrays(diff, arr[i + 1]);
  }
  return diff;
}

function compareArrays(arr1, arr2) {
  var diff = arr1.concat(arr2);
  var intersection = arr1.filter(value => {
    return arr2.includes(value);
  }).filter(uniqueValues).sort();
  intersection.map(item => {
    diff = diff.filter(value => {
      return value !== item;
    }).filter(uniqueValues).sort();
  });
  return diff;
}

function uniqueValues(value, index, arr) {
  return arr.indexOf(value) === index;
}

sym([1, 2, 3], [5, 2, 1, 4]);
