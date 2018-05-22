
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  for (var i = 0; i < collection.length; i++) {
    var match = [];
    for (var key in source) {
      match.push(Object.keys(collection[i]).includes(key));
      match.push(collection[i][key] === source[key]);
    }
    if (!match.includes(false)) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
