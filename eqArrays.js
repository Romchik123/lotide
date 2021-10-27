const eqArrays = function(arr1, arr2) {
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
      console.log(false);
    } else {
      console.log(true);
    }
  }
};





eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
