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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  console.log(object2);
  let arr2 = Object.keys(object2);

  if (arr1.length === arr2.length) {
   
    for (const element of arr1) {
   
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        
        if (eqArrays(object1[element],object2[element]) === false) {
          return false;
        }
   
      } else if (object1[element] !== object2[element]) {
   
        return false;
      }
    }
   
    return true;
  
  } else {
   
    return false;
  }

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  if (eqObjects(actual,expected)){
    console.log(`✔️  Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    
  }
  else{
    console.log(`❌  Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

