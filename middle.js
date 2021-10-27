const middle = function(arr) {
  let result = [];
  let i = 0;

  if (arr.length === 1 || arr.length === 2) {
    result = [];
  } else if (arr.length % 2 !== 0) {
    i = Math.floor(arr.length / 2);
    result.push(arr[i]);
  } else if (arr.length % 2 === 0) {
    i = Math.floor(arr.length / 2);
    result.push(arr[i - 1]);
    result.push(arr[i]);
  }

  console.log(result);
};





middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
