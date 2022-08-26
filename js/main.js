// create navbar menu toggler
let menuToggler = document.querySelector(".nav-toggler");  // select the menu toggler button

menuToggler.addEventListener("click" ,toggleMenu); // add click event on the toggler button

function toggleMenu (e) { // toggle menu on click
  let toggler = e.currentTarget;
  let menu = document.querySelector(toggler.dataset.menu);
  menu.classList.toggle("active");
}
