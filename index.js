// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectEquals');
const countLetter = require('./countLetter');
const eqArrays = require('./eqArrays');
const eqObjects = require('.eqObjects/eq');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPosition = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetter: countLetter,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  map: map,
  takeUntil: takeUntil,
  without: without
};