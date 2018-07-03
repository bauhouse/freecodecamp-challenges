function palindrome(str) {
  // ignore case
  var testString = str.toLowerCase();
  // ignore punctuation and spacing
  testString = testString.match(/\w+/g).join('');
  // ignore underscores
  testString = testString.replace('_', '');

  var testArr = testString.split('');

  var reverseArr = testArr.reverse();
  var reverseString = reverseArr.join('');

  // Test to compare strings
  // return testString + '\n' + reverseString;

  return testString == reverseString;
}

palindrome("A man, a plan, a canal. Panama");
