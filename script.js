// const menu = document.querySelector(".menu-btn");
// const nav = document.querySelector(".header .flex .navbar");

// menu.addEventListener("click", () => {
//     menu.classList.toggle("fa-times");
//     nav.classList.toggle("active")
// })


// swiper from swiper js
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



// swiper from swiper js
