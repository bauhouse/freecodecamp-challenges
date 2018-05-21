
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var collectionKeys = Object.keys(collection);
  var sourceKeys = Object.keys(source);

  var collectionEntries = Object.entries(collection);
  var sourceEntries = Object.entries(source);

  // Only change code above this line
  // return arr;
  return collectionEntries;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
