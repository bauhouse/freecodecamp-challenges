
function convertHTML(str) {
  // &colon;&rpar;
  var entities = {
    ampersand: [/&/g, "&amp;"],
    lessthan: [/</g, "&lt;"],
    greaterthan: [/>/g, "&gt;"],
    quote: [/"/g, "&quot;"],
    apostrophe: [/'/g, "&apos;"]
  };

  for (key in entities) {
    str = str.replace(entities[key][0], entities[key][1]);
  }

  return str;
}

convertHTML("Dolce & Gabbana");
