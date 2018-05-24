
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var nested = [];
  var level = 0;
  if (Array.isArray(arr)) {
    nested.push([level, arr]);
    findArrays(arr, level, nested);
  }
  return nested;
}

function findArrays(arr, level, nested, isArr = false) {
  var isArr = Array.isArray(arr);
  if (isArr) {
    level++;
    for (var i = 0; i < arr.length; i++) {
      nested.push([level, arr[i], isArr]);
      findArrays(arr[i], level, nested, isArr);
      // console.log('this is an array: ' + arr[i]);
      // console.log('level: ' + level);
    }
  }
  return 'Array recursion completed';
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
