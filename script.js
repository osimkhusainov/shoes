const nav = document.querySelector("nav");

document
  .querySelector(".menu")
  .addEventListener("click", () => nav.classList.add("open-nav"));
document
  .querySelector(".close")
  .addEventListener("click", () => nav.classList.remove("open-nav"));
