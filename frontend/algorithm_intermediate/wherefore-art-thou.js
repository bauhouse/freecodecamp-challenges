
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

  return JSON.stringify(Object.values(collection))
    + '\n' + 'length of collection[2]: ' + Object.keys(collection[2]).length
    + '\n' + 'length of source: ' + Object.keys(source).length
    + '\n' + 'keys in collection[2]: ' + Object.keys(collection[2])
    + '\n' + 'key: ' + Object.keys(source)
    + '\n' + 'value: ' + Object.values(source);

  // Only change code above this line
  // return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
