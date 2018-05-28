
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  for (var i = 0; i < arr2.length; i++) {
    var match = false;
    var item = arr2[i];
    var quantity = item[0];
    var name = item[1];
    for (var j = 0; j < arr1.length; j++) {
      if (arr1[j][1] === name) {
        arr1[j][0] += quantity;
        match = true;
      }
    }
    if (match === false) {
      arr1.push(item);
    }
  }

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
