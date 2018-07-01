// Recursive Method (pseudo code)
var str = ???;
permAlone(current position in original string, characters used already in original string, created string) {
  if (current string is finished) {
    print current string;
  } else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] has not been used) {
        put str[i] into the current position of new string;
        mark str[i] as used;
        permAlone(current position in original string, characters used already in original string, created string);
        remove str[i] as used because another branch in the tree for i + 1 will likely use it;
      }
    }
  }
}
permAlone(0, nothing used yet, empty new string (or array the same size as str));
