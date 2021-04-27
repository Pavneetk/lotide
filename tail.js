// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

let tail = function(array) {
  let array1 = [];
  for (let i = 1; i < array.length; i++) {
    array1.push(array[i]);
  }
  return array1;
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const words = ["Yo Yo", "Lighthouse", "Labs"];
const words1 = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(tail(words1));
assertEqual(words.length, 3); // original array should still have 3 elements!