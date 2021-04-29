// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: [${actual}] === [${expected}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
    return false;
  }
};

const countLetters = function(string) {
  const results = {};
  for (const element of string) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = 1;
      } else {
        results[element] = results[element] + 1;
      }
    }

  }
  return results;

};

console.log(countLetters("lighthouse in the house"));