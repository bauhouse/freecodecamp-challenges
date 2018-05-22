
function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var indexes = str.split('').map( letter => alphabet.indexOf(letter));
  for (var i = 0; i < indexes.length; i++) {
    var start = indexes[0];
    if (i + start !== indexes[i]) {
      return alphabet[i + start];
    }
  }
  return undefined;
}

fearNotLetter("abce");
