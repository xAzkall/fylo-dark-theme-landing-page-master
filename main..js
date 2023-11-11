const header = document.getElementById("header");

const scrollHeader = () => {
  this.scrollY > 80
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// Email validation
const email = document.getElementById("email"),
  emailError = document.querySelector(".email-error");

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  !emailRegex.test(email.value)
    ? (emailError.textContent = "Please enter a valid email address.")
    : (emailError.textContent = "");
}

email.addEventListener("input", validateEmail);
