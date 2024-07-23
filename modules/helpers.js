const capitalize = (string) => {
  const uppercaseInitial = string[0].toUpperCase();
  const formattedString = string.replace(string[0], uppercaseInitial);

  return formattedString;
};

const MONTH_NAMES = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];
const getMonthName = (monthIndex) => MONTH_NAMES[monthIndex];

// Format date to "Month YYYY"
const formatDate = (date) => {
  const fullYear = date.getUTCFullYear();
  const monthNumber = date.getUTCMonth();
  const month = getMonthName(monthNumber);
  const capitalizedMonth = capitalize(month);

  return `${capitalizedMonth} ${fullYear}`;
};

// Returns the parameter if it is positive integer, else returns NaN
const checkIsPositiveIntegerOrZero = (num) => {
  num = Number(num);

  return !isNaN(num) && num >= 0;
};

const checkIsPositiveInteger = (num) => {
  num = Number(num);

  return checkIsPositiveIntegerOrZero(num) && num > 0;
};

export {
  capitalize, checkIsPositiveInteger,
  checkIsPositiveIntegerOrZero, formatDate, getMonthName
};
