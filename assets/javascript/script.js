$(document).ready(function () {
  // menu
  $(".menu-toggler").click(() => {
    $("body").toggleClass("sidebar-closed sidebar-expanded");
  });
  $(".close-mobile-sidebar").click(() => {
    $("body").removeClass("sidebar-expanded");
  });
  // search
  $(".search-btn").on("click", function (event) {
    $(".group").toggleClass("none");
    event.stopPropagation();
  });
  $(document).click((event) => {
    if (!$(event.target).closest(".group").length) {
      $(".group").addClass("none");
    }
  });
  // accordian
  $(".accordian-btn").on("click", function () {
    $(this).next(".accordian").slideToggle();
    $(this).find("span svg").toggleClass("rotate");
  });
});
