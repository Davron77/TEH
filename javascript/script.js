const navbarCollapse = document.querySelector(".navbar-collapse");
const faBars = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");
const HeaderFooter = document.querySelector("#HeaderFooter");
const navbarIconLogin = document.querySelector(".navbar-icon__login");
const navbarDropdown = document.querySelector(".navbar-dropdown");

const navbarToggler = document
  .getElementById("navbar-toggler")
  .addEventListener("click", function () {
    navbarCollapse.classList.toggle("open");
    HeaderFooter.classList.toggle("open");
    navbarDropdown.classList.toggle("open");
    faBars.classList.toggle("navbar-bars__icons__hide");
    faXmark.classList.toggle("navbar-bars__icons__hide");
    navbarIconLogin.classList.toggle("hide");
  });
