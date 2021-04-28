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