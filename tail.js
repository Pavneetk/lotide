// FUNCTION IMPLEMENTATION

let tail = function(array) {
  let array1 = [];
  for (let i = 1; i < array.length; i++) {
    array1.push(array[i]);
  }
  return array1;
  
};

module.exports =  tail;
