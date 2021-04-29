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

const findKeyByValue = function(obj,show){
let result = '';
for (const category in obj){
  if (obj[category] === show){
    result = category;
  }
}


return result;
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);