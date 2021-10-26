// FUNCTION IMPLEMENTATION

const tail = function(arr) {
  return arr.slice(1);
};


const assertEqual = function(tail, expected) {
  if (tail === expected) {
    // console.log(`✅✅✅ Assertion Passed: ${tail} === ${expected}`);
  } else {
    // console.log(`🛑🛑🛑 Assertion Failed: ${tail} !== ${expected}`);
  }
};




// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!




for (const iterator of result) {
  console.log(iterator);
}
