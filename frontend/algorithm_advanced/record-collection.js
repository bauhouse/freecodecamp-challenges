
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  console.log("id: " + id);
  console.log("prop: " + prop);
  console.log("value: " + value);
  var record = collection[id];
  var keys = [];
  for (var key in record) {
    if(record.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  var properties = ["album", "artist", "tracks"];
  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    if (property === prop) {
      if (!keys.includes(prop)) {
        console.log(keys.includes(prop));
        var emptyArr = [];
        record[property] = emptyArr;
        console.log("create");
          record[property] = value;
      } else {
        console.log("retrieve");
        console.log("id: " + id);
        console.log("prop: " + prop);
        console.log("value: " + value);
        console.log("record: " + record);
        console.log("property: " + property);
        console.log("record[property]: " + record[property]);
        if (record[property] === []) {
          record[property].push(value);
          console.log("update");
        } else {
          delete record[property];
          console.log("delete");
        }
      }
    }
  }

  return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
