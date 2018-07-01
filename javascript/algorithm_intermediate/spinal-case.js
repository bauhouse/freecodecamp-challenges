
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split('')
    // Convert camel case to words by adding spaces in front of capital letters
    .map( char => char == char.toUpperCase() ? ' ' + char : char ).join('')
    // Convert to lower case
    .toLowerCase()
    // Replace underscores with spaces
    .replace(/_/g, ' ')
    // Replace multiple spaces with single space
    .replace(/  +/g, ' ')
    // Remove spaces at the beginning of the string
    .replace(/^\s+/, '')
    // Replace spaces with hyphens
    .replace(/\s/g, '-')
    // Replace multiple hyphens with single hyphen
    .replace(/--+/g, '-');
}

spinalCase('Teletubbies say Eh-oh');
