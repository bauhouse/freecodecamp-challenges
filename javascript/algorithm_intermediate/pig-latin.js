const vowels = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
  var count = countInitialConsonants(str);
  if (startsWithVowel(str)) {
    str += "way";
  } else {
    var letters = str.split('');
    var consonants = letters.splice(0, count).join('');
    str = letters.join('') + consonants + "ay";
  }
  return str;
}

function startsWithVowel(word) {
  return vowels.includes(word[0]);
}

function countInitialConsonants(word) {
  var chars = word.split('');
  for (var i = 0; i < chars.length; i++) {
    if (vowels.indexOf(chars[i]) > -1) {
      return i;
    }
  }
  return 0;
}

translatePigLatin("california");
