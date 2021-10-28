const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};









const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};















const letterPositions = function(sentence) {
  let newObj = {};

  let i = 0;
  for (const iterator of sentence) {
    if (iterator === " ") {
      i++;
    } else if (newObj[iterator]) {
      newObj[iterator].push(i);
      i++;
    } else {
      newObj[iterator] = [i];
      i++;
    }
  }

  return newObj;
};










// ________________________________________________

// Testing num 1 ::

console.log(letterPositions("LHL"));
console.log(letterPositions("lighthouse in the house"));


/*
Expected Output ::
{ L: [ 0, 2 ], H: [ 1 ] }

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

// ________________________________________________






// ________________________________________________
// Testing num 2 ::

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").l, [3]);
assertArraysEqual(letterPositions("hello").o, [4]);

console.log(letterPositions("hello"));

// ________________________________________________


