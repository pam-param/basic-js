const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  let toString = Object.prototype.toString;

  if (toString.call(date) != toString.call(new Date())) {
    throw new Error('Argument is not instance of Date !');
  }

  const winter = 'winter';
  const spring = 'spring';
  const summer = 'summer';
  const fall = 'fall';

  const seasons = [winter, winter,
    spring, spring, spring, 
    summer, summer, summer,
    fall, fall, fall,
    winter
  ];

  const month = date.getMonth();
  if (seasons[month] === undefined) {
    throw new Error('Unexpected month value!');
  } else {
    return seasons[month];
  }

};
