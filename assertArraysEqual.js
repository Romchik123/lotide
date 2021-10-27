const assertArraysEqual = function(arr1, arr2) {
  let result = [];

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result.push(false);
      } else if (arr1[i] === arr2[i]) {
        result.push(true);
      }
    }

    if (result.includes(false)) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    } else {
      console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    }
  }
};





assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
