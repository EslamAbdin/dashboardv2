var slider = new Swiper ('.slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".slider-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

