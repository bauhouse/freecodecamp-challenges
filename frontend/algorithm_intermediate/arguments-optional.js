
function addTogether() {
  const args = Array.from(arguments);
  var x = args[0];
  if (args.length > 1) {
    var includesArr = args.map(arg => {
      return Array.isArray(arg);
    }).includes(true);
    if (includesArr) {
      return undefined;
    }
    var y = args[1];
    if (typeof x !== "number" || typeof y !== "number") {
      return undefined;
    } else {
      return x + y;
    }
  } else {
    return function(y) {
      return x + y;
    };
  }
}

addTogether(2,3);
