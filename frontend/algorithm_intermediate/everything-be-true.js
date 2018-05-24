
function truthCheck(collection, pre) {
  var check = [];
  collection.map(obj => {
    var propExists = obj.hasOwnProperty(pre);
    if (!propExists) {
      check.push(propExists);
    }
    var x = obj[pre];
    if (x === 0 || x === null || x === undefined) {
      check.push(false);
    }
    if (typeof x === "string" && x.length === 0) {
      check.push(false);
    }
    if (typeof x === "number" && isNaN(x)) {
      check.push(false);
    }
  });
  check = !check.includes(false);
  // Is everyone being true?
  return check;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
