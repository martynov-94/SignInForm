const breakpointLarge = 768;

const [
  socialActions,
  logo,
  closeBtnLabel,
  passwordInput,
  passwordContainer
] = [
  ".social-actions",
  ".logo",
  ".close-btn-label",
  ".form__text-input_password",
  ".form__pw-container"
].map(selector => document.querySelector(selector));

const mobileElements = [
  socialActions,
];

const desktopElements = [
  logo,
  closeBtnLabel
];

[
  "DOMContentLoaded",
  "resize", 
].forEach(event => window.addEventListener(event, toggleElementsVisibility));

passwordInput.oninput = () => {
  if (passwordInput.value === "error") {
    passwordInput.classList.add("form__text-input_error");
    passwordContainer.classList.add("form__pw-container_error");
  } else {
    passwordInput.classList.remove("form__text-input_error");
    passwordContainer.classList.remove("form__pw-container_error");
  }
}

function toggleElementsVisibility() {
  if (window.innerWidth >= breakpointLarge) {
    desktopElements.forEach(el => el.classList.remove("visually-hidden"));
    mobileElements.forEach(el => el.classList.add("visually-hidden"))
  } else { 
    desktopElements.forEach(el => el.classList.add("visually-hidden"));
    mobileElements.forEach(el => el.classList.remove("visually-hidden"));
  }
}

function togglePasswordVisibility() {
  passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
}