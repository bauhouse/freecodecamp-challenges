
function addTogether() {
  const args = Array.from(arguments);
  var not = args.some(num => {
    return typeof num !== "number";
  });
  if (not) {
    return undefined;
  } else {
    var x = args[0]
    if (args.length > 1) {
      var y = args[1];
      return x + y;
    } else {
      return function(y) {
        return x + y;
      }
    }
  }
  return y;
}

console.log(addTogether(2)([3]));
