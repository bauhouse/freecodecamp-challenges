
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var res = [];
  var level = 0;
  if (Array.isArray(arr)) {
    findArrays(arr, level, res);
  }
  return res;
}

function findArrays(obj, level, res, isArr = false) {
  var isArr = Array.isArray(obj);
  if (isArr) {
    level++;
    var arr = obj;
    for (var i = 0; i < arr.length; i++) {
      findArrays(arr[i], level, res, isArr);
    }
  } else {
    res.push(obj);
  }
}

steamrollArray([1, [2], [3, [[4]]]]);
