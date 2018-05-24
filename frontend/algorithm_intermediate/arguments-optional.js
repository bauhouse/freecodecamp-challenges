
function addTogether() {
  const args = Array.from(arguments);
  var x = isNumber(args[0]);
  if (x) {
    if (args.length > 1) {
      var y = isNumber(args[1]);
      if (y) {
        return x + y;
      } else {
        return undefined;
      }
    } else {
      return function(y) {
        y = isNumber(y);
        if (y) {
          return x + y;
        } else {
          return undefined;
        }
      };
    }
  } else {
    return undefined;
  }
}

function isNumber(n) {
  if (typeof n !== "number") {
    return false;
  } else {
    return Number(n);
  }
}

console.log(addTogether(2)([3]));
