
function permAlone(str) {
  var letters = str.split('');
  result = permutations(letters);
  return result;
}

function permutations(items) {
  var positions = items.length;
  var possible = factorial(positions);
  var combos = positions - 1;
  var index = 0;
  var count = 1;
  var perms = [];
  
  while (index < possible) {
    var perm = [];
    for (var i = 0; i < positions; i++) {
      perm.push(i + 1);
    }
    
    perms.push([count, perm]);
    count++;
    index++;
  }

  return perms;
}

function factorial(num) {
  var factor = num - 1;
  while (factor > 1) {
    num *= factor;
    factor--;
  }
  return num;
}

permAlone('aab');
