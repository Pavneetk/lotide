

const assertArraysEqual = require('./assertArraysEqual')

const without = function(array,remove) {
  let array1 = array.slice();
  for (let j = 0; j < remove.length; j++) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === remove[j]) {
        array1.splice(i,1);
      }
    }
  }
  return array1;
};

module.exports = without;

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);