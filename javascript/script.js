const navbarCollapse = document.querySelector(".navbar-collapse");
const faBars = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");
const HeaderFooter = document.querySelector("#HeaderFooter");
const navbarIconLogin = document.querySelector(".navbar-icon__login");
const navbarDropdown = document.querySelector(".navbar-dropdown");
const cardRegister = document.querySelector("#card__register");
const cardLogin = document.querySelector("#card__login");
const cardAccount = document.querySelector("#card__account");
const bgDark = document.querySelector("#bg-dark");
const user = document.getElementById("user");

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

user.addEventListener("click", function () {
  cardRegister.classList.toggle("Open__displayBlock");
  //cardLogin.classList.toggle("Open__displayBlock");
  //cardAccount.classList.toggle("Open__displayBlock");
  bgDark.classList.toggle("Open__displayBlock");
  user.classList.toggle("header-user-show");
});
