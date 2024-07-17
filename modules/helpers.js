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

export {
  capitalize,
  getMonthName,
  formatDate,
};
