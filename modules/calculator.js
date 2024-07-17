// Add months to a given date
const addMonthsToDate = (monthsCount, date) => {
  const startMonth = date.getMonth();

  return date.setMonth(startMonth + monthsCount);
};

// Get remaining months to goal balance
const getMonthsToGoalBalance = ({
  goalBalance,
  monthlyContribution,
  initialDeposit = 0
}) => {
  const months = Math.ceil(goalBalance / monthlyContribution) - initialDeposit;

  return months;
};

// Get the remmaining term to goal balance in years, months
const getRemainingTerm = (monthsNumber) => {
  const yearsCount = Math.floor(monthsNumber / 12);
  const years = yearsCount > 1 ? "anni" : "anno";
  const formatYears = yearsCount ? `${yearsCount} ${years}` : "";

  const monthsCount = monthsNumber % 12;
  const months = monthsCount > 1 ? "mesi" : "mese";
  const formatMonths = monthsCount ? `${monthsCount} ${months}` : "";

  const separator = formatYears && formatMonths && ", ";
  const remainingTerm = `${formatYears}${separator}${formatMonths}`;

  return remainingTerm;
};

export {
  addMonthsToDate,
  getMonthsToGoalBalance,
  getRemainingTerm,
};