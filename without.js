const without = function(source, itemsToRemove) {
  let test = [];
  let result = [];

  for (const iterator1 of source) {
    for (const iterator2 of itemsToRemove) {
      if (iterator1 === iterator2 && !test.includes(iterator1)) {
        test.push(iterator1);
      }
    }
  }

  for (const iterator3 of test) {
    for (const iterator4 of source) {
      if (iterator3 !== iterator4) {
        result.push(iterator4);
      }
    }
  }

  console.log(result);
};





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






without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);


