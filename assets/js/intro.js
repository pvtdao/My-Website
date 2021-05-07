//Khi đang ở màn hình intro thì không scroll được
var body = document.getElementsByTagName("body");
var wrapper = document.querySelector(".wrapper");
body[0].classList.add("can-not-scroll");
body[0].style.backGround = "#000";

// Hidden a main content
wrapper.style.display = "none";

var introSection = document.querySelector(".intro"),
  nextButton = introSection.querySelector(".intro__next");

nextButton.onclick = function (e) {
  e.preventDefault();

  var partOne = introSection.querySelector(".intro__part-1");
  var partTwo = introSection.querySelector(".intro__part-2");
  var partThree = introSection.querySelector(".intro__part-3");

  partOne.classList.add("slide-out-1");
  partTwo.classList.add("slide-out-2");
  partThree.classList.add("slide-out-3");

  wrapper.style.display = "block";

  // refresh aos lib
  AOS.refresh();

  // Create a swiper when explore
  var swiper = new Swiper(".project-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    // mousewheel: {
    //   invert: false,
    // },
    // autoHeight: true,
    pagination: {
      el: ".project-slider__pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  setTimeout(() => {
    console.log("removed");
    
    //Sau khi ấn explore thì cho scroll
    body[0].classList.remove("can-not-scroll");
    introSection.classList.add("intro-hidden");
  }, 2300);
};
