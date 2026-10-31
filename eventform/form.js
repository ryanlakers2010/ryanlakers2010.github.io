const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const additionalInfo = document.querySelector("#additionalInfo");
const identifier = document.querySelector("#identifier");
const identifierLabel = document.querySelector("#identifierLabel");
const dateInput = document.querySelector("#date");
const message = document.querySelector("#message");

// Set the minimum event date to tomorrow.
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const year = tomorrow.getFullYear();
const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
const day = String(tomorrow.getDate()).padStart(2, "0");

const minDate = `${year}-${month}-${day}`;

dateInput.min = minDate;

// Show the correct input depending on registration type.
type.addEventListener("change", () => {
  additionalInfo.hidden = type.value === "";

  identifier.value = "";

  if (type.value === "student") {
    identifierLabel.textContent = "Student I#";
    identifier.placeholder = "Enter your 9 digit I-number";
  }

  if (type.value === "guest") {
    identifierLabel.textContent = "Access Code";
    identifier.placeholder = "Enter event access code";
  }

  message.innerHTML = "";
});

// Handle form submission.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errors = [];

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventDate = dateInput.value;

  // Check name.
  if (name === "") {
    errors.push("Please enter your full name.");
  }

  // Check email.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Check date.
  if (eventDate === "") {
    errors.push("Please select an event date.");
  } else if (eventDate <= minDate) {
    errors.push("Please choose a date later than today.");
  }

  // Check registration type.
  if (type.value === "") {
    errors.push("Please select Student or Guest.");
  }

  // Check student or guest information.
  if (type.value === "student") {
    if (!/^\d{9}$/.test(identifier.value.trim())) {
      errors.push("Student I# must contain exactly 9 digits.");
    }
  }

  if (type.value === "guest") {
    if (identifier.value.trim() !== "EVENT131") {
      errors.push("Please enter the correct access code: EVENT131.");
    }
  }

  // Display errors.
  if (errors.length > 0) {
    message.innerHTML = "";

    const errorBox = document.createElement("div");
    errorBox.className = "error-message";

    const heading = document.createElement("h3");
    heading.textContent = "Please fix the following errors:";

    const list = document.createElement("ul");

    errors.forEach((error) => {
      const item = document.createElement("li");
      item.textContent = error;
      list.appendChild(item);
    });

    errorBox.append(heading, list);
    message.appendChild(errorBox);

    return;
  }

  // Successful registration.
  message.innerHTML = "";

  const successBox = document.createElement("div");
  successBox.className = "success-message";

  const heading = document.createElement("h2");
  heading.textContent = "Registration Successful!";

  const ticketName = document.createElement("p");
  ticketName.textContent = `Name: ${name}`;

  const ticketEmail = document.createElement("p");
  ticketEmail.textContent = `Email: ${email}`;

  const ticketDate = document.createElement("p");
  ticketDate.textContent = `Event Date: ${eventDate}`;

  const ticketType = document.createElement("p");
  ticketType.textContent = `Registration: ${type.value}`;

  const thankYou = document.createElement("p");
  thankYou.textContent = "Thank you for registering! We look forward to seeing you.";

  successBox.append(
    heading,
    ticketName,
    ticketEmail,
    ticketDate,
    ticketType,
    thankYou
  );

  message.appendChild(successBox);

  form.reset();
  additionalInfo.hidden = true;
  dateInput.min = minDate;
});
