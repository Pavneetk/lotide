const eqArrays = function(first, second) {
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(third, forth) {
  if (eqArrays(third, forth)) {
    console.log('True');
  } else {
    console.log('False');
  }
  return;
};

const middle = function(array) {
  const num = [];
  if (array.length >= 3) {
    if (array.length % 2 === 1) {
      num.push((Number(array[Math.round(array.length / 2) - 1])));
    } else {
      num.push(array[(array.length / 2) - 1]);
      num.push(array[(array.length / 2)]);
    }
    return num;
  } else {
    return num;
  }
};

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