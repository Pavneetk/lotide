

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
 
  const results = {};
  let index = 0;
  for (const element of sentence) {
    if (element !== ' ') {
      if (!results[element]) {
        results[element] = [];
      }
      results[element].push(index);
      
    }
    index++;
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions("hello"));


assertArraysEqual(letterPositions("hello").e, [1]);