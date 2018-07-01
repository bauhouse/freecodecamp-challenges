
function convertToRoman(num) {
  var arr = num.toString().split('');
  arr = arr.reverse();

  var digit = arr[0];
  var tens = arr[1];
  var hundreds = arr[2];
  var thousands = arr[3];

  var lookupDigit = {
    null: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
  };

  var lookupTens = {
    null: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC"
  };

  var lookupHundreds = {
    null: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM"
  };

  var lookupThousands = {
    null: "",
    1: "M",
    2: "MM",
    3: "MMM"
  };

  var convertDigit = lookupDigit[digit];
  var convertTens = lookupTens[tens];
  var convertHundreds = lookupHundreds[hundreds];
  var convertThousands = lookupThousands[thousands];

  var romanNumeral = [convertThousands, convertHundreds, convertTens, convertDigit];

  return romanNumeral.join('');
}

convertToRoman(100);
