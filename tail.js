// FUNCTION IMPLEMENTATION

let newResult = "";
let newExpected = "";


const tail = function(arr) {
  return arr.slice(1);
};


const assertEqual = function(tail, expected) {
  for (let x = 0; x < result.length; x++) {
    if (result[x] === expected[x]) {
      newResult += result[x];
      newResult += " ";

      newExpected += expected[x];
      newExpected += " ";
    }
  }

  if (newResult === newExpected) {
    console.log(`✅✅✅ Assertion Passed: ${tail} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${tail} !== ${expected}`);
  }
};





// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
