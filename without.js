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

const without = function(array,remove) {
  let array1 = array.slice();
  //console.log(array1)
  
  for (let j = 0; j < remove.length; j++) {
  for (let i = 0; i < array1.length; i++) {
   // console.log(array1[i]);
    //console.log(remove[j]);
    
    if (array1[i] === remove[j]) {
      array1.splice(i,1);
      
    }
  }
}
//console.log(array1);
  return array1;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);