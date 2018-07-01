const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = ['JUN', 'JULY'];
let arr3 = [...arr1, ...arr2];
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr3);
