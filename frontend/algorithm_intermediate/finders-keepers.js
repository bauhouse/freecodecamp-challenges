
function findElement(arr, func) {
  var num = arr.filter(value => {return func(value)});
  return num[0];
}

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
