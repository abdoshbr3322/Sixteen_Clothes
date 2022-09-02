// Abdullah Elshebrawy: collapse information on click

$(document).ready(function () {
  let infoTogglers = $(".contact .titles .collapse-toggler");
  toggleInfo();

  infoTogglers.click(togglerClicked);

  function togglerClicked () {
    infoTogglers.removeClass("active");
    $(this).addClass("active");
    toggleInfo();
  }

  function toggleInfo() {
    infoTogglers.filter(".active").next().slideDown();
    infoTogglers.filter(":not(.active)").next().slideUp();
  }
})
