
function checkCashRegister(price, cash, cid) {
  var change;
  var diff = cash - price;

  var currency = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };

  var denominations = [];

  for (var key in currency) {
    var denomination = key;
    var value = currency[key];
    denominations.push([denomination, value]);
  }

  var inventory = denominations;

  inventory = inventory.map((item, index, array) => {
    var denom = array[index][0];
    var val = array[index][1];
    var amount = cid.filter(arr => {
      return arr[0] == denom;
    })[0][1];
    var num = Math.round(amount / val);
    // amount = amount[1];
    return [denom, val, amount, num];
  });

  // Here is your change, ma'am.
  return inventory;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
