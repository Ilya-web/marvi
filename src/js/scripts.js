import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Accordion } from 'bootstrap';
import lottie from "lottie-web";




document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);


  let panelsSection = document.querySelector("#banners");
  let panelsContainer = document.querySelector("#banners-container");
  if(panelsSection) {
    const panels = gsap.utils.toArray("#banners-container .wrap-banner");
    const bannersBox =gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: "#banners",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: {min: 0.1, max: 0.1}
        },
        end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
      }
    });

    panels.forEach((banner) => {
        const imgAnimate = banner.querySelector('.banner__lottie')
        let bannerImg = banner.querySelectorAll(".banner__img");
        const urlJson = banner.querySelector('.banner__lottie').getAttribute('data-json');

        if(bannerImg.length === 0)  return;

        const lottieAnimates = lottie.loadAnimation({
          container: imgAnimate,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: urlJson
        })
        gsap.to(bannerImg, {
          duration: 3,
          scrollTrigger: {
            trigger: banner,
            containerAnimation: bannersBox,
            start: "left center",
            // toggleActions: 'play none none reverse',
          },
          onStart: () => {
            lottieAnimates.play()
          },
        });
      });
  }

  //--------------------------------------------------------------------
  const advantagesItem = gsap.utils.toArray('.advantages-item');
  if(advantagesItem.length !== 0) {
    advantagesItem.forEach((item) => {
      const tlAdvantagesItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
        },
      });

      tlAdvantagesItem.fromTo(
        item,
        {
          y: 90,
          opacity: 0,

        },
        {
          y:0,
          opacity:1,
          duration: 0.4,
          onComplete() {
            gsap.to(item.querySelector('.advantages-item__line'), {
              bottom: 0, duration: .3
            })
          },
        }
      );
    });
  }

  //content-box_row----------------------------------------------------
  const contentBoxRow = gsap.utils.toArray('.section-about_itemAnimate');
  if(contentBoxRow.length !== 0) {
    contentBoxRow.forEach((item) => {
      const sectionAbout = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          // toggleActions: "play none none reverse",
          duration: 0.5,
        },
      });

      sectionAbout.fromTo(
        item,
        {
          y: 90,
          opacity: 0,
        },
        {
          y:0,
          opacity:1,

        }
      );
    });
  }

  //--------------------------------------------------------------------
  const sectionAboutSystemImg = document.querySelector('.zoomImg');
  if(sectionAboutSystemImg) {
    const sectionAboutSystem = gsap.timeline({
      scrollTrigger: {
        trigger: ".parentZoomImg",
        start: () => -(innerHeight/2) + ' top',
      },
    });
    sectionAboutSystem.fromTo(
      sectionAboutSystemImg,
      {
        scale: 0.5,
      },
      {
        scale: 1,
      }
    );
  }

  //--------------------------------------------------------------------
  const serviceItems = gsap.utils.toArray('.service-item--animate');
  const tlServiceItems = gsap.timeline({
    scrollTrigger: {
      // scrub: true,
      trigger: '.service-item--animate',
      start: "top bottom",
      // toggleActions: "play none none reverse",
    },
  });
  if(serviceItems.length !== 0) {
    serviceItems.forEach((item) => {
      tlServiceItems.fromTo(
        item,
        {
          y: 90,
          opacity: 0,
        },
        {
          y:0,
          opacity:1,
        }
      );
    });
  }


  //--------------------------------------------------------------------
  const infoBoxAnimate = gsap.utils.toArray('.info-boxAnimate');
  if(infoBoxAnimate.length !== 0) {
    infoBoxAnimate.forEach((item) => {
      const tlInfoBoxAnimate = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
        },
      });

      tlInfoBoxAnimate.fromTo(
        item,
        {
          y: 90,
          opacity: 0,
        },
        {
          y:0,
          opacity:1,
        }
      );
    });
  }

  //--------------------------------------------------------------------
  const imageParallax = document.querySelector('.imageParallax img');
  const parentImageParallax = gsap.timeline({
    scrollTrigger: {
      trigger: ".parentImageParallax",
      scrub: true,
      start: "top top",
    },
  });

  parentImageParallax.to(
    imageParallax,
    {
      y: 300,
    }
  );

  const smartMARVIItemAnimate = gsap.utils.toArray('.smartMARVI-item--animate');
  const tlSectionSmartMARVI = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-smartMARVI',
      start: "top center",
      // toggleActions: "play none none reverse",
    },
  });

  if(smartMARVIItemAnimate.length !== 0) {
    smartMARVIItemAnimate.forEach((item) => {

      tlSectionSmartMARVI.fromTo(
        item,
        {
          y: 90,
          opacity: 0,
        },
        {
          y:0,
          opacity:1,
        }
      );
    });
  }

  //------------------------------------------------------------------
  const imageAnimate = gsap.utils.toArray('.imageAnimate img');

  if(imageAnimate.length !== 0) {
    imageAnimate.forEach(item => {
      const tlImageAnimate = gsap.timeline( {
        scrollTrigger: {
          trigger:item,
          start: "top bottom",
          scrub:true
        }
      })
      tlImageAnimate.to(item,
        {
          scale: 1.3
        }
      )
    })
  }

  //lenis init --------------------------------------------------------
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: "vertical",
    smooth: true,
    smoothTouch: false,
  });
  lenis.on('scroll', ScrollTrigger.update)

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

  if(counts) {
    counts.forEach((i) => {
      i.textContent = totalSections;
    });
  }

  if(sections) {
    sections.forEach((i, index) => {
      const current = index + 1;
      i.querySelector(".banner__count_current").textContent = "0" + current;
      if (current >= 10) {
        i.querySelector(".banner__count_current").textContent = "" + current;
      }
    });
  }
});
