import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  autoWidth: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 32,

  navigation: {
    nextEl: ".popular__next",
    prevEl: ".popular__prew",
  },
});

// Testimonials swiper config

const swiperConfig = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 32,
  grabCursor: true,
  freeMode: true,
  speed: 6000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
  loopAdditionalSlides: 9,
};

const swiperHorizontalConfig = {
  slidesPerView: 3,
  autoHeight: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 20,
  speed: 6000,
  loop: true,
  grabCursor: true,
  freeMode: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
};

let testimonialsSwiper;
let testimonialsSwiper2;
let testimonialsSwiper3;
let testimonialsHorizontal;

const swiperBreackpoint = window.matchMedia("(max-width: 1024px)");

let swiperTestimonials = function () {
  if (swiperBreackpoint.matches === true) {
    if (testimonialsSwiper) {
      testimonialsSwiper.destroy(true, true);
      testimonialsSwiper = undefined;
    }
    if (testimonialsSwiper2) {
      testimonialsSwiper2.destroy(true, true);
      testimonialsSwiper2 = undefined;
    }
    if (testimonialsSwiper3) {
      testimonialsSwiper3.destroy(true, true);
      testimonialsSwiper3 = undefined;
    }

    horizontalSwiper();

    return;
  } else if (!swiperBreackpoint.matches) {
    if (testimonialsHorizontal) {
      testimonialsHorizontal.destroy(true, true);
      testimonialsHorizontal = undefined;
    }

    testimonialsSwipers();

    return;
  }
};

const testimonialsSwipers = function () {
  testimonialsSwiper = new Swiper(".testimonials__first-block", swiperConfig);
  testimonialsSwiper2 = new Swiper(".testimonials__second-block", swiperConfig);
  testimonialsSwiper3 = new Swiper(".testimonials__third-block", swiperConfig);
};

const horizontalSwiper = function () {
  testimonialsHorizontal = new Swiper(
    ".testimonials__horizontal-slider",
    swiperHorizontalConfig
  );
};

swiperBreackpoint.addListener(swiperTestimonials);
swiperTestimonials();
