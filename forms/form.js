
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const campusOptions = document.querySelectorAll(
  'input[name="campus"]'
);
const output = document.querySelector("#output");

travelRange.addEventListener("change", () => {
  notesContainer.hidden = travelRange.value !== "many";

  if (travelRange.value === "one") {
    const selected = [...campusOptions].filter(
      campus => campus.checked
    );

    selected.slice(1).forEach(campus => {
      campus.checked = false;
    });
  }

  if (travelRange.value !== "many") {
    document.querySelector("#notes").value = "";
  }
});

campusOptions.forEach(campus => {
  campus.addEventListener("change", () => {
    if (
      travelRange.value === "one" &&
      campus.checked
    ) {
      campusOptions.forEach(option => {
        if (option !== campus) {
          option.checked = false;
        }
      });
    }
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const selectedCampuses = [...campusOptions]
    .filter(campus => campus.checked)
    .map(campus => campus.value);

  if (selectedCampuses.length === 0) {
    alert("Please select at least one campus.");
    return;
  }

  if (
    travelRange.value === "one" &&
    selectedCampuses.length !== 1
  ) {
    alert("Please select exactly one campus.");
    return;
  }

  const formData = new FormData(form);

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const date = formData.get("availableDate");
  const notes = formData.get("notes");

  output.innerHTML = `
    <h2>Thank You, ${firstName}!</h2>
    <p>Your preferences have been collected.</p>

    <h3>Your Information</h3>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Available Start Date:</strong> ${date}</p>

    <h3>Preferred Campuses</h3>
    <ul>
      ${selectedCampuses.map(campus =>
        `<li>${campus}</li>`
      ).join("")}
    </ul>

    ${notes ? `<p><strong>Travel Notes:</strong> ${notes}</p>` : ""}
  `;

  output.scrollIntoView({ behavior: "smooth" });
});
```
