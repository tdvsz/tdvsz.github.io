$(document).ready(function () {
  const scrollTopButton = $("#scrollToTopBtn");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 400) {
      scrollTopButton.fadeIn();
    } else {
      scrollTopButton.fadeOut();
    }
  });

  scrollTopButton.on("click", function (e) {
    e.preventDefault();

    $("html").addClass("no-smooth-scroll");

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800,
      "linear",
      function () {
        $("html").removeClass("no-smooth-scroll");
      }
    );
  });
});
