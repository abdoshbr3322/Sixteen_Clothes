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
