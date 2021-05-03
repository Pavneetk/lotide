const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(middle(numbers)); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(numbers, [1,2,3,4,5,6,7,8,9,10]);