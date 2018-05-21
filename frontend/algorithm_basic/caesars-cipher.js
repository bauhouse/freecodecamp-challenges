var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var total = alphabet.length;

function rot13(str) { // LBH QVQ VG!

  var shift = 13;
  var decodedCipher = [];
  var letter = '';
  var newLetter = '';

  for (var i = 0; i < str.length; i++) {
    var character = str[i];
    // Test if character is a letter of the alphabet
    if (alphabet.indexOf(character) === -1) {
      decodedCipher.push(character);
    } else {
      letter = str[i];
      newLetter = getNewLetter(letter, shift);
      decodedCipher.push(newLetter);
    }
  }

  return decodedCipher.join('');
}

function getNewLetter(letter, shift) {
  var initialIndex = alphabet.indexOf(letter);
  var newIndex = initialIndex + shift;
  if (newIndex > (total - 1)) {
    newIndex = newIndex - total;
  }
  var newLetter = alphabet[newIndex];
  return newLetter;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
