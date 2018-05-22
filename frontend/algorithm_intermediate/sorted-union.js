
function uniteUnique(arr) {
  var args = arguments;
  var unique = [];
  for (var i = 0; i < args.length; i++) {
    unique = unique.concat(args[i].filter( value => !unique.includes(value)));
  }
  
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
