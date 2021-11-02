const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("Should compare the array result with it's output", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
