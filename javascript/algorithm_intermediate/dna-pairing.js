
function pairElement(str) {
  var lookup = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };
  
  return str.split('').map(value => [value, lookup[value]]);
}

pairElement("GCG");
