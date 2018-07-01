
function truthCheck(collection, pre) {
  var check = true;
  collection.map(obj => {
    var propExists = obj.hasOwnProperty(pre);
    if (!propExists) {
      check = false;
    }
    var x = obj[pre];
    if (x === 0 || x === null || x === undefined) {
      check = false;
    }
    if (typeof x === "string" && x.length === 0) {
      check = false;
    }
    if (typeof x === "number" && isNaN(x)) {
      check = false;
    }
  });
  // Is everyone being true?
  return check;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
