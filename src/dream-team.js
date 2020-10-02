const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let firstLetters = members.reduce((accumulator, member) => {
    if (typeof(member) === 'string' && member.length > 0) {
      accumulator.push(member.trim()[0].toUpperCase());
    }
    return accumulator;
  }, []);

  return firstLetters.sort().join('');
};
