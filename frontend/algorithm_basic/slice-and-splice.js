function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var array1 = arr1.slice();
  var array2 = arr2.slice();
  var array3 = array2.splice(n);
  return array2.concat(array1).concat(array3);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
