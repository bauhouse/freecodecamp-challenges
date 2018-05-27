
function sym(args) {
  var arr = Array.prototype.slice.call(arguments);
  var arr1 = arr[0];
  var arr2 = arr[1];
  var diff = compareArrays(arr1, arr2);
  return diff;
}

function compareArrays(arr1, arr2, type = "diff") {
  var diff = arr1.concat(arr2);
  var intersection = arr1.filter(value => {
    return arr2.includes(value);
  }).filter(uniqueValues).sort();
  intersection.map(item => {
    diff = diff.filter(value => {
      return value !== item;
    }).filter(uniqueValues).sort();
  });
  if (type === "diff") {
    return diff;
  } else {
    return intersection;
  }
}

sym([1, 2, 3], [5, 2, 1, 4]);
