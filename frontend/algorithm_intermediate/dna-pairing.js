
function pairElement(str) {
  var lookup = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };
  
  str = str.split('');
  str = str.map(value => [value, lookup[value]]);
  return str;
}

pairElement("GCG");
