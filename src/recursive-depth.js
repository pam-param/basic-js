const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }

    let values = arr.map(item => Array.isArray(item) ? 1 + this.calculateDepth(item) : 1);
    return Math.max(...values);
  }
};