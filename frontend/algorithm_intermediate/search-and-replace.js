
function myReplace(str, before, after) {
  var words = str.split(" ");
  var index = words.indexOf(before);
  var word = words[index];
  var firstLetter = word[0];
  var capitalized = isUpperCase(firstLetter);
  if (capitalized) {
    after = capitalize(after);
  } else {
    after = after.toLowerCase();
  }
  var replace = words.splice(words.indexOf(before), 1, after);
  str = words.join(' ');
  return str;
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
