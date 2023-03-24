const phone = document.querySelector(".dropdown");
const menu = document.querySelector(".menu");

phone.addEventListener("click", () => {
  menu.classList.toggle("close");
});

const quick = document.querySelector(".quickbutton");
const extra = document.querySelector(".subnav-content");

quick.addEventListener("click", () => {
  extra.classList.toggle("close");
});

// It basiclly looks for clicks and when it notices a click it toggels the chosen item.
// In the first projekt the the menu get affected by the button called dropdown.
// When dropdown gets clicked the const phone gets activetd. 2nd this makes close toggel for menu.
// In the css when menu.close is on it has display none to make it vanish
// Same for the other exampel but with other names
