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

const head = function(array1) {
  return array1[0];
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");