const eqObject = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };


describe("#eqObject", () => {
  it("returns true", () => {
    assert.isTrue(eqObject(ab,ba));
  });
  it("returns false", () => {
    assert.isFalse(eqObject(ab,abc));
  });
  it("returns true", () => {
    assert.isTrue(eqObject(cd, dc));
  });
  it("returns false", () => {
    assert.isFalse(eqObject(cd, cd2));
  });
 

});