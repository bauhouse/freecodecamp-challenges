
function myReplace(str, before, after) {
  var words = str.split(" ");
  var index = words.indexOf(before);
  var word = words[index];
  var initialCap = word[0];
  var upper = isUpperCase(initialCap);
  if (upper) {
    after = capitalize(after);
  } else {
    after = after.toLowerCase();
  }
  var replace = words.splice(words.indexOf(before), 1, after);
  // var words = words.map(word => isUpperCase(word.splice(0,1)));
  // return index;
  // return str.replace(before, after);
  // return str;
  // return replace + ' ' + words + '\n' + 'Initial cap: ' + initialCap + '\n' + 'isUpperCase: ' + upper;
  return words.join(' ');
}

function isUpperCase(character) {
  return character == character.toUpperCase();
}

function capitalize(word) {
  letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
