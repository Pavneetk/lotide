// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`❌  Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};
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
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false