import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/tab";
import { Accordion } from 'bootstrap';
import lottie from "lottie-web";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);





  //content-box_row----------------------------------------------------
  const sectionAbout = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-about",
      scrub: true,
      start: "top center",
      end: "bottom center",
    },
  });

  const contentBoxRow = gsap.utils.toArray('.section-about_itemAnimate');
  contentBoxRow.forEach((item) => {
    sectionAbout.fromTo(
      item,
      {
        y: 90,
        opacity: 0,
      },
      {
        y:0,
        opacity:1
      }
    );
  });


  const sectionAboutSystem = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-aboutSystem",
      scrub: true,
      start: () => -(innerHeight/2) + ' top',
      end: "bottom bottom",
    },
  });

  sectionAboutSystem.fromTo(
    '.section-aboutSystem__img',
    {
      scale: 0.5,
    },
    {
      scale: 1,
    }
  );


  const sectionSmartMARVI = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-smartMARVI",
      scrub: true,
      start: 'top center',
      end: "bottom bottom",
      markers: true,
    },
  });


  const smartMARVIItemAnimate = gsap.utils.toArray('.smartMARVI-item--animate');

  smartMARVIItemAnimate.forEach((item) => {
    sectionSmartMARVI.fromTo(
      item,
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });


  //section-functionsMARVI animate on scroll---------------------------

  const container = document.querySelector(".section-functionsMARVI");
  const sectionsMARVI = gsap.utils.toArray(".section-functionsMARVI .wrap-banner");

  let scrollTween = gsap.to(sectionsMARVI, {
    xPercent: -100 * (sectionsMARVI.length - 1),
    ease: "none",
    horizontal: true,
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsMARVI.length - 1),
      start: "top top",
      end: () =>
          "+=" +
      document.querySelector(".section-functionsMARVI").offsetWidth + 1,
      markers: true

    }
  });

  sectionsMARVI.forEach((section, index) => {
    const imgAnimate = section.querySelector('.banner__lottie')
    let text = section.querySelectorAll(".banner__img");

    if(text.length === 0)  return;

    const lottieAnimates = lottie.loadAnimation({
      container: imgAnimate,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `jsonAnimate/${index + 1}.json`
    })

    gsap.to(text, {
      duration: 3,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: 'play none none reverse',
        markers: true,
      },
      onStart: () => {
        lottieAnimates.play()
      },
    });
  });




  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".section-functionsMARVI",
  //     pin: true,
  //     scrub: 1,
  //     snap: 1 / (sections.length - 1),
  //     start: "top top",
  //     end: () =>
  //       "+=" +
  //       document.querySelector(".section-functionsMARVI").offsetWidth +
  //       1,
  //   },
  // });












  //more-btn----------------------------------------------------
  const moreBtn = document.querySelector('.more-btn');

  if(moreBtn) {
    moreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      moreBtn.classList.add('active')
    })
  }


  //clear all inputs from modal ---------------------------------
  const entranceModal = document.getElementById("entranceModal");
  if(entranceModal) {
    entranceModal.addEventListener("hidden.bs.modal", function (event) {
      entranceModal.querySelectorAll("input").forEach((input) => {
        input.value = "";
      });
    });

    //visible current tab for modal ---------------------------------
    entranceModal.addEventListener("show.bs.modal", (e) => {
      const currentModalBtnId = e.relatedTarget.attributes.id.value;
      document.getElementById(`${currentModalBtnId}-item-tab`).click();
    });
  }




  //header fixed -----------------------------------------------
  let lastScroll = 0;
  const defaultOffset = 700;
  const header = document.querySelector(".header");

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener("scroll", () => {
    const headerHeight = header.clientHeight;
    const accordionHeaderSticky = document.querySelector('.accordion-header-sticky')
    if (
      (scrollPosition() > lastScroll && scrollPosition() > defaultOffset) ||
      lastScroll < defaultOffset
    ) {
      header.classList.remove("show");
      accordionHeaderSticky ? accordionHeaderSticky.style.top = '0' : null
    } else if (scrollPosition() < lastScroll) {
      header.classList.add("show");
      accordionHeaderSticky ? accordionHeaderSticky.style.top = `${headerHeight}px` : null
    }
    lastScroll = scrollPosition();
  });

  //horizontal scroll section-functionsMARVI---------------------
  const sections = gsap.utils.toArray(".wrap-banner");
  const totalSections = sections.length + "";
  const counts = document.querySelectorAll(".banner__count_all");

  counts.forEach((i) => {
    i.textContent = totalSections;
  });

  sections.forEach((i, index) => {
    const current = index + 1;
    i.querySelector(".banner__count_current").textContent = "0" + current;
    if (current >= 10) {
      i.querySelector(".banner__count_current").textContent = "" + current;
    }
  });


  //lenis init --------------------------------------------------------

  const lenis = new Lenis({
    duration: 3,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: "vertical",
    smooth: true,
    smoothTouch: false,
  });

  // let lastScroll = 0;
  // const defaultOffset = 800;
  // const headerFixed = document.querySelector(".header-fixed");
  // lenis.on("scroll", (e) => {
  //   if (
  //     (e.animatedScroll > lastScroll && e.animatedScroll > defaultOffset) ||
  //     lastScroll < defaultOffset
  //   ) {
  //     headerFixed.classList.remove("show");
  //   } else if (e.animatedScroll < lastScroll) {
  //     headerFixed.classList.add("show");
  //   }
  //   lastScroll = e.animatedScroll;
  // });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      lenis.scrollTo(this.getAttribute("href"));
    });
  });
});
