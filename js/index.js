const nav = document.querySelector("nav");
const navIcon = document.querySelector(".icon-nav");
const content = document.querySelector(".content");

const toggleNav = () => {
  navIcon.classList.toggle("active");
  nav.classList.toggle("active");
};

navIcon.addEventListener("click", toggleNav);
nav.addEventListener("click", toggleNav);
content.addEventListener("click", () => {
  nav.classList.contains("active") && toggleNav();
});
