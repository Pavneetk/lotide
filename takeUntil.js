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


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    else{
    results.push(item);
    }
  }
  return results;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(takeUntil(data1, x => x === 4),[1, 2, 5, 7, 2, -1, 2]);//True