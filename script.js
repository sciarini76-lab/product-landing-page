const icon = document.getElementById("search-icon");
const box = document.getElementById("search-box");

icon.addEventListener("click", () => {
  box.classList.toggle("active");
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});