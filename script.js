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

//scroll up section functionality 
const allSections = document.querySelectorAll(".section")
const showSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
}

const sectObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectObserver.observe(section);
  // section.classList.add("section-hidden");
})