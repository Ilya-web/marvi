//init reviewsSlider------------------------------------------------
import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", () => {

  if(document.querySelector('.reviews-slider')) {
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
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1441: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }
  //banner-slider----------------------------------------------------

  if(document.querySelector('.banner-slider')) {
    new Swiper(".banner-slider", {
      slidesPerView: 1,
      loop: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-slider-next",
        prevEl: ".banner-slider-prev",
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          console.log('svvsv')
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      },
      breakpoints: {
        1100: {
          slidesPerView: 1.1,
        },
        1400: {
          slidesPerView: 1.3,
        },
        2200: {
          slidesPerView: 1.8,
        },
      },
    });
  }

  //init reviewsSlider------------------------------------------------
  if(document.querySelector('.blog-slider')) {
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
        575: {
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
  }

  //init teamSlider------------------------------------------------
  if(document.querySelector('.teamSlider')) {
    let init = false;
    let teamSlider;
    const swiperCard = () => {
      if (window.innerWidth <= 1300) {
        if (!init) {
          init = true;
          teamSlider = new Swiper(".teamSlider", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            modules: [Pagination],
            pagination: {
              el: ".slider-pagination",
              clickable: true,
            },
          });
        }
      } else if (init) {
        teamSlider.destroy();
        init = false;
      }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);
  }

});
