import { onFormReset, onFormSubmit } from "./modules/form.js"

const calculatorForm = document.getElementById("calculator-form");

calculatorForm.addEventListener("submit", event => {
  event.preventDefault();

  onFormSubmit(event);
});

calculatorForm.addEventListener("reset", event => {
  onFormReset();
});
