import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Accordion} from 'bootstrap';
import lottie from "lottie-web";
import { Modal } from "bootstrap";





document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  let lenis = null;

  //menu mobile ----------------------------------------------
  const btnMenu = document.querySelectorAll('.btn-menu');
  const menu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.mobile-menu__close');

  if(menu) {
    btnMenu.forEach(item => {
      item.addEventListener('click',  () => {
        menu.classList.add('active');
        document.body.classList.add('hidden');

        if(lenis !== null) {
          lenis.stop();
        }
      })
    })

  }

  if(closeMenu) {
    closeMenu.addEventListener('click', () => {
      btnMenu.forEach(i => {
        menu.classList.remove('active');
        document.body.classList.remove('hidden');
        if(lenis !== null) {
          lenis.start();
        }

      })
    })
  }

  //-------------------------------------------------------------------

  const chatButton = document.getElementById('chatButton')

  if(chatButton) {
    const urlJson = chatButton.getAttribute('data-json');
    const lottieCustomServices = lottie.loadAnimation({
      container: chatButton,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: urlJson
    })
  }


  mm.add("(min-width: 1100px)", () => {
    let panelsSection = document.querySelector("#banners");
    let panelsContainer = document.querySelector("#banners-container");

    if(panelsSection) {
      const panels = gsap.utils.toArray("#banners-container .wrap-banner");

      //скролл по секциям с доводкой секции до начала экрана
      // const bannersBox = gsap.to(panels, {
      //   xPercent: -100 * ( panels.length - 1 ),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "#banners",
      //     pin: true,
      //     start: "top top",
      //     scrub: 1,
      //     snap: {
      //       snapTo: 1 / (panels.length - 1),
      //       inertia: false,
      //       duration: {min: 0.1, max: 0.1}
      //     },
      //     end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
      //   }
      // });

      const bannersBox = gsap.to(panelsContainer, {
        x: () => -(panelsContainer.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: panelsSection,
          invalidateOnRefresh: true,
          start: "top top",
          pin: true,
          scrub: 1,
          end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
        }
      })

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

    //-------------------------------------------------------------------

    const lottieCustomServicesImg = document.getElementById('lottieCustomServices')

    if(lottieCustomServicesImg) {
      const urlJson = lottieCustomServicesImg.getAttribute('data-json');
      const lottieCustomServices = lottie.loadAnimation({
        container: lottieCustomServicesImg,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: urlJson
      })
      gsap.to(lottieCustomServicesImg, {
        duration: 3,
        scrollTrigger: {
          trigger: lottieCustomServicesImg,
          start: "top center",
        },
        onStart: () => {
          lottieCustomServices.play()
        },
      });
    }

    //-------------------------------------------------------------------

    const accordionBtn = document.querySelectorAll('.accordion-btn');

    if(accordionBtn.length !== 0) {
      accordionBtn.forEach(accordion => {
        accordion.addEventListener('click', e => {
          const time = 500;
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);// <- This time is in milliseconds

          gsap.delayedCall(time, () => ScrollTrigger.refresh()); // <- This time is in seconds
        })
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
              gsap.fromTo(item.querySelector('.advantages-item__line'), {
                bottom: 100, duration: .3
              },
                {
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

    if(serviceItems.length !== 0) {
      const tlServiceItems = gsap.timeline({
        scrollTrigger: {
          // scrub: true,
          trigger: '.service-item--animate',
          start: "top bottom",
          // toggleActions: "play none none reverse",
        },
      });

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
    const bestInMARVIItems = gsap.utils.toArray('.bestInMARVI-item--animate');

    if(bestInMARVIItems.length !== 0) {
      const tlBestInMARVIItems = gsap.timeline({
        scrollTrigger: {
          // scrub: true,
          trigger: '.bestInMARVI-item--animate',
          start: "top bottom",
          // toggleActions: "play none none reverse",
        },
      });

      bestInMARVIItems.forEach((item) => {
        tlBestInMARVIItems.fromTo(
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
    const imageParallax = gsap.utils.toArray('.imageParallax img');

    if(imageParallax.length !== 0) {
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
    }

    //------------------------------------------------------------------
    const smartMARVIItemAnimate = gsap.utils.toArray('.smartMARVI-item--animate');

    if(smartMARVIItemAnimate.length !== 0) {
      const tlSectionSmartMARVI = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-smartMARVI',
          start: "top center",
          // toggleActions: "play none none reverse",
        },
      });

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
    let lenis = new Lenis({
      duration: 2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
    });
    lenis.on('scroll', () => {
      ScrollTrigger.update
    })

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

    //counter--------------------------------------------------
    const counter = document.querySelectorAll('.counter');

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    counter.forEach(item => {
      const count = item.getAttribute('data-count')
      animateValue(item, 0, count, 1500);
    })

    return () => {
      lenis.destroy();
    };
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

  const orderBtn = document.querySelectorAll('.orderBtn');
  const priceLinks  = document.querySelectorAll('.prices-nav__link ');

  orderBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const price = btn.getAttribute('data-price');
      const packageType = btn.getAttribute('data-packageType');
      let packagePeriod = ''

      priceLinks.forEach(link => {
       if(link.classList.contains('active')) {
         packagePeriod =  link.textContent.toLowerCase();
       }
      })

      document.querySelector('.orderPackage_price').textContent = price;
      document.querySelector('.orderPackage_type').textContent = packageType;
      document.querySelector('.orderPackage_period').textContent = packagePeriod;
    })

  })


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
