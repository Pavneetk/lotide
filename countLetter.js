// FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

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

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));
