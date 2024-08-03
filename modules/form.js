import {
  addMonthsToDate,
  getMonthsToGoalBalance,
  getRemainingTerm,
} from "./calculatorService.js";
import {
  checkIsPositiveInteger,
  checkIsPositiveIntegerOrZero,
  formatDate,
} from "./helpers.js";
import {
  createDetailsSection,
  createErrorSection,
  highlightInvalidInput,
  removeFormErrorMessages,
  removeOldDetailsSection,
} from "./ui.js";

const validateForm = (event) => {
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

  // Validate form payload
  if (
    checkIsPositiveInteger(goalBalance) &&
    checkIsPositiveInteger(monthlyContribution) &&
    checkIsPositiveIntegerOrZero(initialDeposit)
  ) {
    // Calculate months
    const months = getMonthsToGoalBalance({
      goalBalance,
      monthlyContribution,
      initialDeposit,
    });

    // Calculate plan total duration
    const remainingTerm = getRemainingTerm(months);

    // Calculate date
    addMonthsToDate(months, date);
    const formattedDate = formatDate(date);

    // Show detail section on success
    createDetailsSection(formattedDate, remainingTerm, months);

    // Blur all form inputs (keyboard disappears on mobile)
    Array.from(document.querySelectorAll("input")).forEach((element) => {
      element.blur();
    });
  } else {
    // Create error section on invalid data
    createErrorSection();
  }

  // Scroll to details section
  document.querySelector("#details-section").scrollIntoView({
    behavior: "smooth",
  });
};

const onFormSubmit = (event) => {
  // Serialize form data
  const formData = new FormData(event.target);
  const formPayload = Object.fromEntries(formData);

  // Validate form
  const isFormValid = validateForm(event);

  if (isFormValid) {
    // Handle form data
    handleFormSubmit(formPayload);
  } else {
    highlightInvalidInput(formPayload);
  }
};

const onFormReset = () => {
  removeOldDetailsSection();
};

export { onFormReset, onFormSubmit };
