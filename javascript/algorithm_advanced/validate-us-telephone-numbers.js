
function telephoneCheck(str) {
  var regex = /([0-9]*)\w+/g;
  var num = str.match(regex).reduce((acc,val) => acc + val);

  var check = false;
  var first = 1;
  var len = num.length;

  // Check length
  if (len === 10) {
    check = true;
  }
  // Check for North American country code
  if (len == 11 && num[0] == first) {
    check = true;
  }

  // Check parentheses
  if (str.includes("(") && !str.includes(")")) {
    check = false;
  }
  if (!str.includes("(") && str.includes(")")) {
    check = false;
  }
  if (str[str.length-1] === ")") {
    check = false;
  }

  // Check if number contains question mark
  if (str.includes("?")) {
    check = false;
  }

  // Check if number starts with -
  if (str[0] === "-") {
    check = false;
  }

  return check;
}


telephoneCheck("555-555-5555");
