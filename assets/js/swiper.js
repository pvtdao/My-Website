// Swiper project
var swiper = new Swiper(".project-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".project-slider__pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 5000,
  // }
});