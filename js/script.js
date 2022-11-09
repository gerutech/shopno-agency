"use strict";
/*Opening and closing menu */
const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/**Close Menu by clicking on menu links*/
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/*OPENING AND CLOSING KNOW MORE blocks IN SERVISES SECTION*/

const body = document.querySelector("body");
const servicesWrapper = document.querySelector(".services-wrapper");
const knowMoreContent = document.querySelector(".know_more-content");
const knowMoreClose = document.querySelectorAll(".know_more-close");
const knowMoreContentAll = document.querySelectorAll(".know_more-content");

body.addEventListener("click", function (e) {
  /*Optiton1 - Closing all Know-More blocks by clicking anywhere on the site.*/
  knowMoreContentAll.forEach(function (el) {
    el.classList.remove("know_more-open");
  });
  /*Opening the KnowMore box by clicking on the Know More link*/

  if (e.target.classList.contains("services-content-link")) {
    e.target
      .closest(".services-item")
      .querySelector(".know_more-content")
      .classList.add("know_more-open");
  }
  /*Option2 - Closштп an open block only by clicking on the "Close" symbol. */
  // if (e.target.classList.contains("know_more-close")) {
  //   e.target
  //     .closest(".services-item")
  //     .querySelector(".know_more-content")
  //     .classList.remove("know_more-open");
  // }
});
///////////////////////////////////////////////////////////
//////////////MODAL FORM

const heroBtn = document.querySelector(".hero-btn");
const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");

//Modal Form Opening
heroBtn.addEventListener("click", function () {
  overlay.classList.add("modal-visible");
});

//Modal Form Closing
modalClose.addEventListener("click", function () {
  overlay.classList.remove("modal-visible");
});

////////////////////////What they say Slider/////////////////////////
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-slider-left");
const btnRight = document.querySelector(".btn-slider-right");

let curSlide = 0;
const maxSlide = slides.length;
//DOTS
const dotContainer = document.querySelector(".they_say-dots");
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button data-slide= '${i}' class="dot they_say-dot"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".they_say-dot")
    .forEach((dot) => dot.classList.remove("fill"));
  document
    .querySelector(`.they_say-dot[data-slide='${slide}']`)
    .classList.add("fill");
};

activateDot(0);

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);
//Got the next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

//Slide changing with keyboard

document.addEventListener("keydown", function (e) {
  console.log(e);
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

//Active dot marking
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("they_say-dot")) {
    const { slide } = e.target.dataset;

    goToSlide(slide);
    activateDot(slide);
  }
});
