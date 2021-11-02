const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns an Array", () => {
    const result1 = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result1, ["Lighthouse", "Labs"]);
  });

  it("Check the returned array elements", () => {
    // Test Case 1: Check the returned array elements
    const result2 = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result2.length, 2); // ensure we get back two elements
    assert.deepEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.deepEqual(result2[1], "Labs"); // ensure second element is "Labs"
  });

  it("Check the original array", () => {
    // Test Case: Check the original array
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words.length, 3); // original array should still have 3 elements!
  });
});
