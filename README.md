# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pkang2/lotide`

**Require it:**

`const _ = require('@pkang2/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: compares array and console logs ture or false
* `assertEqual(actual,expected)`: compares strings and console logs true or false
* `assertObjectEquals(obj1,obj2)`: compares objects and console logs true or false
* `countLetter(string)`: returns number of times each letter shows up in a string
* `countOnly(array,element)`: returns count of element in array
* `eqArrays(array1,array2)`: compares array and returns logs ture or false
* `eqObjects(obj1,obj2)`: compares objects and returns logs true or false
* `findKey(obj,callbackfcn)`: returns key on call back function
* `findKeyByValue(obj,string)`: returns key by value
* `head(array1)`: returns array1[0]
* `letterPosition(string)`: returns object with postions of letters
* `map(array,callbackfcn)`: returns array with function applied to each element
* `middle(array)`: returns the middle element/s of an array
* `tail(array)`: returns an array without the first element
* `takeUntil(array,callbackfcn)`: returns an array that terminates at specifed element
* `without(array,remove)`: returns an array with removed specified elements
