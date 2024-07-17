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

export {
  addMonthsToDate,
  getMonthsToGoalBalance,
};