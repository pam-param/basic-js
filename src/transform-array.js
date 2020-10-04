const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not Array');
  }
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === discardNext || arr[i] === discardPrev || arr[i] === doubleNext || arr[i] === doublePrev) {
      continue;
    }

    if (arr[i - 1] === discardNext) {
      continue;
    }

    if (arr[i - 1] === doubleNext) {
      transformedArray.push(arr[i]);
    }

    transformedArray.push(arr[i]);

    if(arr[i + 1] === doublePrev) {
      transformedArray.push(arr[i]);
    }

    if(arr[i + 1] === discardPrev) {
      transformedArray.pop();
    }
  }

  return transformedArray;

};

