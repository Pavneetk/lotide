
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  
  if (eqObjects(actual,expected)){
    console.log(`✔️  Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    return true;
  }
  else{
    console.log(`❌  Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
    return false;
  }
};

module.exports = assertObjectsEqual;

