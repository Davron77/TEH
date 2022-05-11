const body = document.querySelector("body");
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
const catalogBtn = document.getElementById("catalog-btn");
const catalogMenu = document.querySelector(".catalog-menu");
const catalogBtnClose = document.querySelector(".catalog-btn-close");
const catalogBtnOpen = document.querySelector(".catalog-btn-open");
const productFilterBtn = document.getElementById("product-filter-btn");
const productFilter = document.querySelector(".product-filter");

const navbarToggler = document
  .getElementById("navbar-toggler")
  .addEventListener("click", function () {
    navbarCollapse.classList.toggle("open");
    HeaderFooter.classList.toggle("open");
    navbarDropdown.classList.toggle("open");
    faBars.classList.toggle("navbar-bars__icons__hide");
    faXmark.classList.toggle("navbar-bars__icons__hide");
    navbarIconLogin.classList.toggle("hide");
    body.classList.toggle("navbar-body-open");
  });
user.addEventListener("click", function () {
  cardAccount.classList.toggle("catalog-menu-open-scale");
  bgDark.classList.toggle("Open__displayBlock");
});

if (catalogBtn) {
  catalogBtn.addEventListener("click", function () {
    catalogMenu.classList.toggle("catalog-menu-open-scale");
    catalogBtnClose.classList.toggle("Open__displayBlock");
    catalogBtnOpen.classList.toggle("Open__displayNone");
  });
}

bgDark.addEventListener("click", function () {
  cardAccount.classList.remove("catalog-menu-open-scale");
  bgDark.classList.remove("Open__displayBlock");
});
