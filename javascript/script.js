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
const registerBtn = document.querySelector("#register-btn");
const cardPasswordLose = document.getElementById("card__password-lose");
const passwordLoseBtn = document.querySelectorAll(".password-lose-btn");

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

let ClasscardRegister = false;

user.addEventListener("click", function () {
  if (ClasscardRegister) {
    cardLogin.classList.remove("catalog-menu-open-scale");
    //cardAccount.classList.toggle("catalog-menu-open-scale");
    cardRegister.classList.remove("catalog-menu-open-scale");
    bgDark.classList.remove("Open__displayBlock");
    console.log(ClasscardRegister);
    ClasscardRegister = false;
  } else {
    cardLogin.classList.toggle("catalog-menu-open-scale");
    //cardAccount.classList.toggle("catalog-menu-open-scale");
    cardRegister.classList.remove("catalog-menu-open-scale");
    bgDark.classList.toggle("Open__displayBlock");
    user.classList.toggle("header-user-show");
    console.log(ClasscardRegister);
  }
});

registerBtn.addEventListener("click", function () {
  cardLogin.classList.remove("catalog-menu-open-scale");
  cardRegister.classList.toggle("catalog-menu-open-scale");
  ClasscardRegister = true;
});

if (catalogBtn) {
  catalogBtn.addEventListener("click", function () {
    catalogMenu.classList.toggle("catalog-menu-open-scale");
    catalogBtnClose.classList.toggle("Open__displayBlock");
    catalogBtnOpen.classList.toggle("Open__displayNone");
  });
}

bgDark.addEventListener("click", function () {
  cardRegister.classList.remove("catalog-menu-open-scale");
  cardLogin.classList.remove("catalog-menu-open-scale");
  cardAccount.classList.remove("catalog-menu-open-scale");
  bgDark.classList.remove("Open__displayBlock");
});

const passwordLosepage = () => {
  cardLogin.classList.remove("catalog-menu-open-scale");
  cardRegister.classList.remove("catalog-menu-open-scale");
  bgDark.classList.remove("Open__displayBlock");
  cardPasswordLose.classList.toggle("catalog-menu-open-scale");
  console.log("hi");
};
