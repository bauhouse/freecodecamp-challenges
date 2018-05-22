
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var collectionKeys = Object.keys(collection);
  var sourceKeys = Object.keys(source);

  var collectionEntries = Object.entries(collection);
  var sourceEntries = Object.entries(source);

  var collectionValues = Object.values(collection);
  var sourceValues = Object.values(source);

  var map = collection.map(obj => Object.keys(obj));

  for (var i = 0; i < collection.length; i++) {
    var match = [];
    for (var key in source) {
      match.push(Object.keys(collection[i]).includes(key));
      match.push(Object.values(collection[i]).includes(source[key]));
    }
    if (!match.includes(false)) {
      arr.push(collection[i]);
    }
  }

  return JSON.stringify(Object.values(collection))
    + '\n' + 'length of collection[2]: ' + Object.keys(collection[2]).length
    + '\n' + 'length of source: ' + Object.keys(source).length
    + '\n' + 'keys in collection[2]: ' + Object.keys(collection[2])
    + '\n' + 'keys in source: ' + Object.keys(source)
    + '\n' + 'value: ' + Object.values(source)
    + '\n'
    + '\n' + JSON.stringify(source)
    + '\n'
    + '\n' + JSON.stringify(map)
    + '\n'
    + '\n' + JSON.stringify(arr);

  // Only change code above this line
  // return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
