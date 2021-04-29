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

const assertArraysEqual = function(third, forth) {
  if (eqArrays(third, forth)) {
    console.log('True');
  } else {
    console.log('False');
  }
  return;
};

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

console.log(letterPositions("hello"));


assertArraysEqual(letterPositions("hello").e, [1]);