const middle = function (arr) {
  let result = [];
  let index = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    result = [];
  } else if (arr.length % 2 === 1) {
    result.push(arr[index]);
  } else if (arr.length % 2 === 0) {
    result.push(arr[index - 1]);
    result.push(arr[index]);
  }
  return result;
};

module.exports = middle;
