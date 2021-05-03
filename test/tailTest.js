const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const words = ["Yo Yo", "Lighthouse", "Labs"];
const words1 = [];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(tail(words1));
assertEqual(words.length, 3); // original array should still have 3 elements!