const countLetters = function(params) {
  let newArr = "";
  let newObj = {};

  for (const iterator of params) {
    if (iterator === " ") {
      newArr += "";
    } else {
      newArr += iterator;
    }
  }

  for (const iterator of newArr) {
    if (newObj[iterator]) {
      newObj[iterator] += 1;
    } else {
      newObj[iterator] = 1;
    }
  }

  return newObj;
};






console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));






/*
Expected output ::
{ L: 2, H: 1 }
{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
*/
