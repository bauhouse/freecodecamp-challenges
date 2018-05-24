
function truthCheck(collection, pre) {
  var fail = [];
  var check = [];
  var arr = collection.map(obj => {
    var propExists = obj.hasOwnProperty(pre);
    if (!propExists) {
      fail.push("exists: false");
      check.push(propExists);
    }
    var x = obj[pre];
    if (x === 0 || x === null || x === undefined) {
      fail.push("0, null, undefined");
      check.push(false);
    }
    if (typeof x === "string" && x.length === 0) {
      fail.push("empty string");
      check.push(false);
    }
    if (typeof x === "number" && isNaN(x)) {
      fail.push("NaN");
      check.push(false);
    }
    return fail;
  });
  check = !check.includes(false);
  // Is everyone being true?
  return check;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
