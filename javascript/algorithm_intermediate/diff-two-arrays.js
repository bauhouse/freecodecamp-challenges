
function diffArray(arr1, arr2) {
  // Merge arrays
  var mergedArray = arr1.concat(arr2);
  var filteredArray = mergedArray;

  for (i = 0; i < arr1.length; i++) {
    if (isInArray(arr2, arr1[i])) {
      filteredArray = filterItems(filteredArray, arr1[i]);
    }
  }

  return filteredArray;
}

function filterItems(arr, value) {
  return arr.filter(function(item) {
    return item !== value;
  });
}

function isInArray(arr, value) {
  if (arr.indexOf(value) > -1) {
    return true;
  } else {
    return false;
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
