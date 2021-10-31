const eqArrays = function(arr1) {
  let trueFalse = false;

  for (const key1 in arr1) {
    if (Array.isArray(arr1[key1])) {
      trueFalse = true;
    }
  }
  return trueFalse;
};







// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};










// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let num1 = 0;
  let num2 = 0;
  let trueFalse = false;
  let result = true;

  for (const key1 in object1) {
    num1++;
  }
  for (const key2 in object2) {
    num2++;
  }

  if (num1 === num2) {
    trueFalse = eqArrays(object1);
  }

  if (trueFalse) {
    for (const key1 in object1) {
      if (object1[key1].length !== object2[key1].length) {
        result = false;
      }
    }
    return result;
  } else {
    if (num1 === num2) {
      for (const key1 in object1) {
        if (object1[key1] === object2[key1]) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
};














const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
assertObjectsEqual(ab, abc);





const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
assertObjectsEqual(cd, cd2);

