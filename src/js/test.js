

// const horizontalSections = gsap.utils.toArray('[data-section-horizontal-scrolling]');
//
// horizontalSections.forEach(function ($section) {
//   const $scroll = $section.querySelector('[data-scroll-in-section]');
//
//   if ($scroll) {
//     gsap.to($scroll, {
//         //@formatter:off
//       xPercent: -100 * (sectionsMARVI.length - 1),
//         //@formatter:on
//         ease: 'none',
//         scrollTrigger: {
//           trigger: $scroll,
//           snap: 1 ,
//           scroller: document.body, // necessary setting for smooth-scrollbar on body
//           pinType: 'transform', // necessary setting for smooth-scrollbar on body
//           start: 'center center',
//           end: () =>
//                "+=" +
//                document.querySelector(".section-functionsMARVI").offsetWidth + 1,
//           scrub: true,
//           pin: '.main'
//       }
//       });
//   }
// });
//
//
// const timeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.afterHorizontalScroll',
//     start: 'top center',
//     scroller: document.body, // necessary setting for smooth-scrollbar on body
//     //pinType: 'transform', // necessary setting for smooth-scrollbar on body,
//     invalidateOnRefresh: true,
//     pinnedContainer: '.main',
//     markers: true,
//     onEnter: function() {
//       console.log('enter')
//     }
//   }
// });
//
// timeline.fromTo('.afterHorizontalScroll p', {
//     y: 150,
//     opacity: 0,
//   },
//   {
//     y: 0,
//     opacity: 1,
//   })
//
