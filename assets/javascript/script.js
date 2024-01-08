$(document).ready(function () {
  $(".search-btn").on("click", function (event) {
    $(".group").toggleClass("none");
    event.stopPropagation();
  });

  $(".menu-toggler").click(() => {
    $("body").toggleClass("sidebar-closed sidebar-expanded");
  });
  $(".close-mobile-sidebar").click(() => {
    $("body").removeClass("sidebar-expanded");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".group").length) {
      $(".group").addClass("none");
    }
  });
});

$(document).ready(function () {
  $(".accordian-btn").on("click", function () {
    $(this).next(".accordian").slideToggle();
    $(this).find("svg").toggleClass("rotate");
  });
});
