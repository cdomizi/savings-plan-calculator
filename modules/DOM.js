const contentDiv = document.querySelector(".content");

/** Remove old saving plan details section */
const removeOldDetailsSection = () => {
  const oldDetailsSection = document.querySelector("#details-section");
  if (oldDetailsSection) contentDiv.removeChild(oldDetailsSection);
};

const createDetailsSectionContainer = () => {
  // Remove old details section before creating a new one
  removeOldDetailsSection();
  
  const detailsSection = document.createElement("section");
  detailsSection.setAttribute("id", "details-section");
  contentDiv.appendChild(detailsSection);

  return detailsSection;
};

/** Create savings plan details section */
const createDetailsSection = (date, months) => {
  const detailsSection = createDetailsSectionContainer();
  
  // Add title
  const heading = document.createElement("h2");
  heading.setAttribute("id", "details-section-header");
  detailsSection.appendChild(heading);
  heading.textContent += "Dettagli del piano di risparmio";

  // Add savings plan end date
  const endDate = document.createElement("p");
  endDate.setAttribute("id", "end-date");
  detailsSection.appendChild(endDate);
  endDate.textContent += "Data raggiungimento obiettivo: ";
  const endDateText = document.createElement("span");
  endDateText.setAttribute("class", "details-section-bold");
  endDate.appendChild(endDateText);
  endDateText.textContent += date;

  // Add number of months
  const monthsCount = document.createElement("p");
  monthsCount.setAttribute("id", "months-count");
  detailsSection.appendChild(monthsCount);
  monthsCount.textContent += "N. mesi/contributi: ";
  const monthsCountText = document.createElement("span");
  monthsCountText.setAttribute("class", "details-section-bold");
  monthsCount.appendChild(monthsCountText);
  monthsCountText.textContent += months;
};

// Display error in the details section
const createErrorSection = () => {
  const detailsSection = createDetailsSectionContainer();
  
  const heading = document.createElement("h2");
  heading.setAttribute("id", "details-section-header");
  heading.setAttribute("class", "details-section-header-error");
  detailsSection.appendChild(heading);
  heading.textContent += "Errore: impossibile calcolare il piano";

  const errorDetail = document.createElement("p");
  errorDetail.setAttribute("id", "details-section-error-detail");
  detailsSection.appendChild(errorDetail);
  errorDetail.textContent += "Il formato dei dati inseriti non è corretto.";
};

// Show error on invalid form input
const highlightInvalidInput = (event) => {
  const formData = new FormData(event.target);
  const formPayload = Object.fromEntries(formData);
  
  for (const field in formPayload) {
    if (Object.hasOwnProperty.call(formPayload, field)) {

      const input = document.querySelector(`input[id='${field}']`);
      if (!input.checkValidity()) {
        input.closest(".form-field").appendChild(
          Object.assign(document.createElement("span"), {
            className: "validation-error-message",
            textContent: input.validationMessage,
          }),
        );
        input.parentNode.style.border = "1px solid red";
      }
    }
  };
};

const removeFormErrorMessages = () => {
  const validationErrorMessages =
    document.querySelectorAll(".validation-error-message");

  if (validationErrorMessages) {
    // Remove error messages
    validationErrorMessages.forEach((element) => element.remove());

    // Reset input border color
    document.querySelectorAll(".form-field input").forEach((element) => {
      element.parentNode.style.border = "1px solid lightgray";
    });
  }

};

export {
  createDetailsSection,
  createErrorSection,
  highlightInvalidInput,
  removeFormErrorMessages,
  removeOldDetailsSection
};
