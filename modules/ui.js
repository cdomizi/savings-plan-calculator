/** Remove old saving plan details section */
const removeOldDetailsSection = () => {
  const detailsSection = document.querySelector("#details-section");
  detailsSection.replaceChildren();
};

/** Create savings plan details section */
const createDetailsSection = (date, remainingTerm, months) => {
  // Remove old details section before creating a new one
  removeOldDetailsSection();

  const detailsSection = document.querySelector("#details-section");

  // Add title
  const heading = document.createElement("h2");
  heading.setAttribute("class", "details-section-header");
  detailsSection.appendChild(heading);
  heading.textContent += "Dettagli del piano di risparmio";

  // Add savings plan end date
  const endDate = document.createElement("p");
  endDate.setAttribute("id", "end-date");
  detailsSection.appendChild(endDate);
  endDate.textContent += "📅 Data raggiungimento obiettivo: ";
  const endDateText = document.createElement("span");
  endDateText.setAttribute("class", "details-section-bold");
  endDate.appendChild(endDateText);
  endDateText.textContent += date;

  // Add plan remaining term
  const planRemainingTerm = document.createElement("p");
  planRemainingTerm.setAttribute("id", "plan-total-duration");
  detailsSection.appendChild(planRemainingTerm);
  planRemainingTerm.textContent += "⏳ Durata complessiva: ";
  const planRemainingTermText = document.createElement("span");
  planRemainingTermText.setAttribute("class", "details-section-bold");
  planRemainingTerm.appendChild(planRemainingTermText);
  planRemainingTermText.textContent += remainingTerm;

  // Add number of months
  const monthsCount = document.createElement("p");
  monthsCount.setAttribute("id", "months-count");
  detailsSection.appendChild(monthsCount);
  monthsCount.textContent += "💶 N. mesi/contributi: ";
  const monthsCountText = document.createElement("span");
  monthsCountText.setAttribute("class", "details-section-bold");
  monthsCount.appendChild(monthsCountText);
  monthsCountText.textContent += months;
};

// Display error in the details section
const createErrorSection = () => {
  // Remove old details section before creating a new one
  removeOldDetailsSection();

  const detailsSection = document.querySelector("#details-section");

  const heading = document.createElement("h2");
  heading.setAttribute("class", "details-section-header");
  heading.setAttribute("class", "details-section-header-error");
  detailsSection.appendChild(heading);
  heading.textContent += "Errore: impossibile calcolare il piano";

  const errorDetail = document.createElement("p");
  errorDetail.setAttribute("id", "details-section-error-detail");
  detailsSection.appendChild(errorDetail);
  errorDetail.textContent += "❌ Il formato dei dati inseriti non è corretto";
};

// Show error on invalid form input
const highlightInvalidInput = (formPayload) => {
  for (const field in formPayload) {
    if (Object.hasOwnProperty.call(formPayload, field)) {
      const input = document.querySelector(`input[id='${field}']`);
      if (!input.checkValidity()) {
        input.closest(".form-field").appendChild(
          Object.assign(document.createElement("span"), {
            className: "validation-error-message",
            textContent: input.validationMessage,
          })
        );
        input.parentNode.style.border = "1px solid var(--error)";
      }
    }
  }
};

const removeFormErrorMessages = () => {
  const validationErrorMessages = document.querySelectorAll(
    ".validation-error-message"
  );

  if (validationErrorMessages) {
    // Remove error messages
    validationErrorMessages.forEach((element) => element.remove());

    // Reset input border color
    document.querySelectorAll(".form-field input").forEach((element) => {
      element.parentNode.style.border = "1px solid var(--secondary-light)";
    });
  }
};

export {
  createDetailsSection,
  createErrorSection,
  highlightInvalidInput,
  removeFormErrorMessages,
  removeOldDetailsSection,
};
