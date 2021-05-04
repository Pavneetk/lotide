const words = ["ground", "control", "to", "major", "tom"];


const assertArraysEqual = require('./assertArraysEqual')

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);

const names = ['Jeff',"Bill","Steve","Tony","Henry"];
const birthyears = [1958,2000,1995,1966,1987,1972,1967,1801]
assertArraysEqual(map(names, name => ("hello")),['Hi Jeff',"Hi Bill","Hi Steve","Hi Tony","Hi Henry"]); //False
assertArraysEqual(map(names, name => ("Hi " + name)),['Hi Jeff',"Hi Bill","Hi Steve","Hi Tony","Hi Henry"]);//True
assertArraysEqual(map(birthyears, birthyear => (2021 - birthyear)),[63,21,26,55,34,49,54,220]);//True
