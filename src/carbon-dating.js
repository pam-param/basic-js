const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = '') {
  const sampleActivityValue = Number(sampleActivity);
  
  if (typeof(sampleActivity) !== 'string' || 
    !isFinite(sampleActivityValue) ||
    sampleActivityValue <= 0 || sampleActivityValue > 15) {
    return false;
  }

  const decayConstant = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityValue) / decayConstant);

  return age;
};