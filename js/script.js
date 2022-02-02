const breakpointLarge = 768;

const [
  socialActions,
  logo,
  closeBtnLabel,
  passwordInput,
  passwordContainer,
  resetForm,
  signInForm,
  emailInput,
  emailInputContainer,
  resetMsgContainer,
  resetSubmitBtn,
  resetMsgText
] = [
  ".social-actions",
  ".logo",
  ".close-btn-label",
  ".form__text-input_password",
  ".form__pw-container",
  ".reset-form",
  ".sign-in-form",
  ".reset-form__email-input",
  ".reset-form__email-input-container",
  ".reset-form__reset-msg-container",
  ".reset-form__submit-btn",
  ".reset-msg-text"
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

emailInput.oninput = () => {
  if (!emailInput.value) {
    emailInputContainer.classList.add("reset-form__email-input-container_empty");
    emailInputContainer.classList.remove("reset-form__email-input-container_error");
    resetSubmitBtn.classList.add("reset-form__submit-btn_disabled");
    resetSubmitBtn.disabled = true;
  } else if (emailInput.value === "test@gmail.com") {
    emailInputContainer.classList.remove("reset-form__email-input-container_empty");
    emailInputContainer.classList.remove("reset-form__email-input-container_error");
    resetSubmitBtn.classList.remove("reset-form__submit-btn_disabled");
    resetSubmitBtn.disabled = false;
  } else {
    emailInputContainer.classList.remove("reset-form__email-input-container_empty");
    emailInputContainer.classList.add("reset-form__email-input-container_error");
    resetSubmitBtn.classList.add("reset-form__submit-btn_disabled");
    resetSubmitBtn.disabled = true;

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

function showResetForm() {
  signInForm.classList.add("visually-hidden");
  resetForm.classList.remove("visually-hidden");
}

function resetLoginAndPw() {
  resetMsgContainer.classList.remove("visually-hidden");
  emailInputContainer.classList.add("visually-hidden");
  resetSubmitBtn.classList.add("visually-hidden");

  resetMsgText.textContent += ` ${emailInput.value}`;
}