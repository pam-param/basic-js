const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCount = 0;
  
  for (let row of matrix) {
    for (let col of row) {
      if (col === '^^') {
        catsCount++;
      }
    }
  }

  return catsCount;
};
