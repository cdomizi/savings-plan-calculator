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
  // Validate form values
  goalBalance = Number(goalBalance);
  monthlyContribution = Number(monthlyContribution);
  initialDeposit = Number(initialDeposit);

  // Calculate number of months
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

// Get balance at any given date
const getBalanceAtDate = (monthlyContribution, year, month) => {
  let currentBalance = 0;
  const currentDate = new Date();
  const date = new Date();

  date.setYear(year);
  date.setMonth(month);

  while (currentDate < date) {
    currentBalance += monthlyContribution;
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return currentBalance;
};

export {
  addMonthsToDate,
  getMonthsToGoalBalance,
  getRemainingTerm,
  getBalanceAtDate,
};