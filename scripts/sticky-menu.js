$(document).ready(function () {
  const header = $(".header");
  const heroSection = $(".hero");
  const headerHeight = header.outerHeight();
  const headerOffset = header.offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > headerOffset) {
      header.addClass("sticky");
      if (heroSection.length) {
        heroSection.css("margin-top", headerHeight + "px");
      }
    } else {
      header.removeClass("sticky");
      if (heroSection.length) {
        heroSection.css("margin-top", 0);
      }
    }
  });

  $(".header .link, .footer .link").on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const targetElement = $(targetId);

    if (targetElement.length) {
      const destination = targetElement.offset().top - headerHeight;

      $("html").addClass("no-smooth-scroll");

      $("html, body").animate(
        {
          scrollTop: destination,
        },
        800,
        "linear",
        function () {
          $("html").removeClass("no-smooth-scroll");
        }
      );
    }
  });

  $(".members-grid .member-card a").on("click", function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const targetElement = $(targetId);

    if (targetElement.length) {
      const destination = targetElement.offset().top - headerHeight;

      $("html").addClass("no-smooth-scroll");

      $("html, body").animate(
        {
          scrollTop: destination,
        },
        100,
        function () {
          $("html").removeClass("no-smooth-scroll");
        }
      );
    }
  });
});
