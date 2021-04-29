const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const names = ['Jeff',"Bill","Steve","Tony","Henry"];
const birthyears = [1958,2000,1995,1966,1987,1972,1967,1801]
assertArraysEqual(map(names, name => ("hello")),['Hi Jeff',"Hi Bill","Hi Steve","Hi Tony","Hi Henry"]); //False
assertArraysEqual(map(names, name => ("Hi " + name)),['Hi Jeff',"Hi Bill","Hi Steve","Hi Tony","Hi Henry"]);//True
assertArraysEqual(map(birthyears, birthyear => (2021 - birthyear)),[63,21,26,55,34,49,54,220]);//True
