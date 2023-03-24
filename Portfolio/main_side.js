const phone = document.querySelector(".dropdown");
const menu = document.querySelector(".menu");
const cont = menu.querySelectorAll("a");

phone.addEventListener("click", () => {
  menu.classList.toggle("close");
});
