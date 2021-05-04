const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectEquals');

describe("#assertObjectsEqual", () => {
  it("returns true", () => {
    assert.isTrue(assertObjectsEqual(ab,ba));
  });
  it("returns false", () => {
    assert.isFalse(assertObjectsEqual(ab,abc));
  });
  it("returns true", () => {
    assert.isTrue(assertObjectsEqual(cd, dc));
  });
  it("returns false", () => {
    assert.isFalse(assertObjectsEqual(cd, cd2));
  });
 

});
