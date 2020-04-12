const nav = document.getElementsByTagName("nav")[0];
const navIcon = document.getElementsByClassName("icon-nav")[0];

const toggleNav = () => {
  navIcon.classList.toggle("active");
  nav.classList.toggle("active");
};

navIcon.addEventListener("click", toggleNav);
nav.addEventListener("click", toggleNav);
