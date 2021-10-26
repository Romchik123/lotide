// FUNCTION IMPLEMENTATION

const head = function(arr) {
  return arr[0];
};

const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`✅✅✅ Assertion Passed: ${head} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${head} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), undefined);
