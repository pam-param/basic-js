const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, 
                                   { repeatTimes = 1, 
                                    separator = '+', 
                                    addition = '', 
                                    additionRepeatTimes = 1, 
                                    additionSeparator = '|' }) {
  
  if (str === undefined) {
    return '';
  }

  const baseString = String(str);
  if (!baseString) {
    return '';
  }
  
  let additionalString = String(addition);

  if (additionalString) {
    if (additionRepeatTimes > 1) {
      additionalString = (additionalString + additionSeparator).repeat(additionRepeatTimes - 1) + additionalString;
    } 
  }

  let unitedString = baseString + additionalString;
  
  if (repeatTimes > 1) {
    unitedString = (unitedString + separator).repeat(repeatTimes - 1) + unitedString;
  } 

  return unitedString;
};
  