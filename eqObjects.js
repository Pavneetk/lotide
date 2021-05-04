// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length === arr2.length) {
   
    for (const element of arr1) {
   
      if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        
        if (eqArrays(object1[element],object2[element]) === false) {
          return false;
        }
   
      } else if (object1[element] !== object2[element]) {
   
        return false;
      }
    }
   
    return true;
  
  } else {
   
    return false;
  }

};
module.exports = eqObjects;

