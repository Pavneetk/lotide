// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj,show) {
  let result;
  for (const category in obj) {
    if (obj[category] === show) {
      result = category;
    }
  }


  return result;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);