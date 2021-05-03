const eqArrays = require('./eqArrays');

const assertArraysEqual = function(third, forth) {
  if (eqArrays(third, forth)) {
    console.log('True');
    return true;
  } else {
    console.log('False');
    return false;
  }
  
};

module.exports = assertArraysEqual;