// Abdullah Elshebrawy: create navbar menu toggler
let menuToggler = document.querySelector(".nav-toggler");  // select the menu toggler button

menuToggler.addEventListener("click" ,toggleMenu); // add click event on the toggler button

function toggleMenu (e) { // toggle menu on click
  let toggler = e.currentTarget;
  let menu = document.querySelector(toggler.dataset.menu);
  menu.classList.toggle("active");
}

// Abdullah Mohamed: button scroll to top
const btnscrolltoTop = document.querySelector("#btnscrolltoTop");

btnscrolltoTop.addEventListener("click" ,function () {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});

// Abdullah Elshebrawy: show scrolltoTop button and header on scroll

let header = document.querySelector("header");

checkScrollPosition(); // chck scroll position when someone open the page
window.addEventListener("scroll" ,checkScrollPosition) // chck scroll position when someone scroll by the page

function checkScrollPosition() {
  if (window.scrollY >= 450) { // check if the window is scrolled by 450px or more
    // if true show the btn and the header
    showContent();
  } else {
    // if false hide the btn and the header
    hideContent();
  }
}

function showContent() {
  header.classList.add("fixed");
  btnscrolltoTop.classList.add("active");
}
function hideContent() {
  header.classList.remove("fixed");
  btnscrolltoTop.classList.remove("active");
}

// Abdullah Elshebrawy: create banner section and carousel

$(document).ready(function(){
  $(".banner .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 20,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    dotsContainer: ".banner .bullets",
  });
});
