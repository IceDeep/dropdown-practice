const featuresButton = document.getElementById("features");
const dropdownOne = document.getElementById("dropdown-one");
const featuresArrowUp = document.getElementById("features-arrow__up");
const featuresArrowDown = document.getElementById("features-arrow__down");
const dropdownTwo = document.getElementById("dropdown-two");
const companyButton = document.getElementById("company");
const companyArrowUp = document.getElementById("company-arrow__up");
const companyArrowDown = document.getElementById("company-arrow__down");
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerClose = document.getElementById("hamburger-close");
const nav = document.querySelector("nav");
const backdrop = document.querySelector(".backdrop")

const featuresFunction = () => {
  dropdownOne.classList.toggle("no-display");
  featuresArrowUp.classList.toggle("no-display");
  featuresArrowDown.classList.toggle("no-display");
};

const companyFunction = () => {
  dropdownTwo.classList.toggle("no-display");
  companyArrowUp.classList.toggle("no-display");
  companyArrowDown.classList.toggle("no-display");
};

const navToggleFunction = () => {
  nav.classList.toggle("tablet-invisible");
  backdrop.classList.toggle("no-display")
};

featuresButton.addEventListener("click", featuresFunction);
dropdownOne.addEventListener("mouseleave", featuresFunction);

companyButton.addEventListener("click", companyFunction);
dropdownTwo.addEventListener("mouseleave", companyFunction);

hamburgerIcon.addEventListener("click", navToggleFunction);
hamburgerClose.addEventListener("click", navToggleFunction);
backdrop.addEventListener("click", navToggleFunction);
