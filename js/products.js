// make filtering by category
const $products = $('.products .content');

addStylesheet("../css/pages/isotope.css");

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
      $(filterBtns).removeClass("active");
      $(btn).addClass("active");
    })
  });

})

function addStylesheet(href) {
  let head = $("head");
  let stylesheet = $(document.createElement("link"));
  stylesheet
    .attr("rel" ,'stylesheet')
    .attr("href" ,href);
  head.append(stylesheet);
}
