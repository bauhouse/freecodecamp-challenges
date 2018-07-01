
const myArray = [1,2,3,4];

const myArrayTimesTwo = myArray.map(value => {
  return value * 2;
});

const myArrayTimesPlus = myArray.map( (value, index, array) => {
  return value * index + array[index];
});

console.log(myArray);
console.log(myArrayTimesTwo);
console.log(myArrayTimesPlus);
