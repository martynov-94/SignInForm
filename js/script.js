const breakpointLarge = 768;

const [
  socialActions
] = [
  ".social-actions"
].map(selector => document.querySelector(selector));

const mobileElements = [
  socialActions,
];

const desktopElements = [
];

[
  "DOMContentLoaded",
  "resize", 
].forEach(event => window.addEventListener(event, toggleElementsVisibility));

function toggleElementsVisibility() {
  if (window.innerWidth >= breakpointLarge) {
    desktopElements.forEach(el => el.classList.remove("visually-hidden"));
    mobileElements.forEach(el => el.classList.add("visually-hidden"))
  } else { 
    desktopElements.forEach(el => el.classList.add("visually-hidden"));
    mobileElements.forEach(el => el.classList.remove("visually-hidden"));
  }
}