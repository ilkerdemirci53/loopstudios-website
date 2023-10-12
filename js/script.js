const menuBtn = document.getElementById("menu-btn");
const menuEl = document.getElementById("menu");

menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("open");
  menuEl.classList.toggle("flex");
  menuEl.classList.toggle("hidden");
}
