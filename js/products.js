// make filtering by category
const $products = $('.products .content');

imagesLoaded($products, function () {
  let iso = $products.isotope({
    itemSelector: '.products .card',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 20,
      gridSizer: ".products .card",
    }
  });

  let filterBtns = $(".products .filters button");
  filterBtns.each((_index, btn) => {
    $(btn).on("click" ,() => {
      let filter = $(btn).attr("data-filter");
      iso.isotope({filter: filter});
      // toggle active class on button
      $(filterBtns).removeClass("active");
      $(btn).addClass("active");
    })
  });

})
