
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  // Convert camel case to words by adding spaces in front of capital letters
  str = str.split('').map( char => char == char.toUpperCase() ? ' ' + char : char ).join('');

  // Convert to lower case
  str = str.toLowerCase();

  // Replace underscores with spaces
  str = str.replace(/_/g, ' ');

  // Replace multiple spaces with single space
  str = str.replace(/  +/g, ' ');

  // Remove spaces at the beginning of the string
  str = str.replace(/^\s+/, '');

  // Replace spaces with hyphens
  str = str.replace(/[\s]/g, '-');

  // Replace multiple hyphens with single hyphen
  str = str.replace(/--+/g, '-');

  return str;
}

spinalCase('Teletubbies say Eh-oh');
