document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  // Name Validation
  if (username.length < 3) {
    document.getElementById("usernameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Phone Validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Message Validation
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
