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
  //cardRegister.classList.toggle("catalog-menu-open-scale");
  cardLogin.classList.toggle("catalog-menu-open-scale");
  //cardAccount.classList.toggle("catalog-menu-open-scale");
  bgDark.classList.toggle("Open__displayBlock");
  user.classList.toggle("header-user-show");
});

registerBtn.addEventListener("click", function () {
  cardLogin.classList.remove("catalog-menu-open-scale");
  cardRegister.classList.toggle("catalog-menu-open-scale");
});

catalogBtn.addEventListener("click", function () {
  catalogMenu.classList.toggle("catalog-menu-open-scale");
  catalogBtnClose.classList.toggle("Open__displayBlock");
  catalogBtnOpen.classList.toggle("Open__displayNone");
});

bgDark.addEventListener("click", function () {
  cardRegister.classList.remove("catalog-menu-open-scale");
  cardLogin.classList.remove("catalog-menu-open-scale");
  cardAccount.classList.remove("catalog-menu-open-scale");
  bgDark.classList.remove("Open__displayBlock");
  console.log("hi");
});

// productFilterBtn.addEventListener("click", function () {
//   productFilter.classList.toggle("product-filter-open");
// });

//Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

// index-page-product-card

var swiper = new Swiper(".index-page-product", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    500: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// product-card

var swiper = new Swiper(".product-Swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4.5,
    },
  },
});

var swiper = new Swiper(".product", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    500: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
