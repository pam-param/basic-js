const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let solution = {};
  solution.turns = 2 ** disksNumber - 1;
  solution.seconds = Math.floor(3600 * solution.turns / turnsSpeed);

  return solution;
};

