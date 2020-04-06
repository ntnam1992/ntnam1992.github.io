$(document).ready(function() {
  // Handle click to toggle main menu
  $(".js__menu__btn").click(function () {
    $(".js__menu__btn").toggleClass("show__menu");
    $(".js__menu__content").toggleClass("show__menu");
  });

  // Handle click to hide cookies bar
  $(".js__cookies__btn").click(function() {
    $(this).parent().css("display", "none");
    $(this).parent().parent().parent().addClass("active");
  });
});