
function convertHTML(str) {
  // &colon;&rpar;
  var entities = {
    ampersand: "&amp",
    lessthan: "&lt;",
    greaterthan: "&gt;",
    quote: '"',
    apostrophe: "'"
  };

  str = entities.ampersand + entities.lessthan + entities.greaterthan + entities.quote + entities.apostrophe;

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
