import { addMonthsToDate, getMonthsToGoalBalance } from "./calculator.js";
import {
  createDetailsSection,
  createErrorSection,
  highlightInvalidInput,
  removeFormErrorMessages,
  removeOldDetailsSection,
} from "./DOM.js";
import { formatDate } from "./helpers.js";

const checkIsFormValid = (event) => {
  // Remove form validation error messages if existing
  removeFormErrorMessages();

  const form = event.target;

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopImmediatePropagation();

    return false;
  }

  return true;
};

const handleFormSubmit = (formPayload) => {
  const date = new Date(Date.now());
  const { goalBalance, monthlyContribution, initialDeposit } = formPayload;

  // Calculate months
  const months = getMonthsToGoalBalance({
    goalBalance,
    monthlyContribution,
    initialDeposit,
  });

  // Show error section on data validation error
  if (isNaN(months)) createErrorSection();

  // Calculate date
  addMonthsToDate(months, date);
  const formattedDate = formatDate(date);

  // Show detail section on success
  createDetailsSection(formattedDate, months);
};

const onFormSubmit = (event) => {
  // Validate form
  const isFormValid = checkIsFormValid(event);

  if (isFormValid) {
    // Serialize form data
    const formData = new FormData(event.target);
    const formPayload = Object.fromEntries(formData);
  
    // Handle form data
    handleFormSubmit(formPayload);
  } else {
    highlightInvalidInput(event);
  };
};

const onFormReset = () => {
  removeOldDetailsSection();
};

export { onFormSubmit, onFormReset };
