const findKey = function(obj, callback) {
 
  for (const name in obj) {
    if(callback(obj[name])){
        return name;
      }
    }
    return;
  }
  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✔️  Assertion Passed: [${actual}] === [${expected}]`);
      return true;
    } else {
      console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
      return false;
    }
  };



console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2 ) );// => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1 ),"Blue Hill");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5 ), undefined);