//init reviewsSlider------------------------------------------------
import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

  new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews-slider-next",
      prevEl: ".reviews-slider-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  //init reviewsSlider------------------------------------------------
  new Swiper(".blog-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".blog-slider-next",
      prevEl: ".blog-slider-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 40,

      },
    },
  });
});
