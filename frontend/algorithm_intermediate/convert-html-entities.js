
function convertHTML(str) {
  // &colon;&rpar;
  var entities = {
    ampersand: ["&", "&amp"],
    lessthan: ["<", "&lt;"],
    greaterthan: [">", "&gt;"],
    quote: ['"', "&quot;"],
    apostrophe: ["'", "&apos;"]
  };

  str = entities.ampersand[1] + entities.lessthan[1] + entities.greaterthan[1] + entities.quote[1] + entities.apostrophe[1];

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
