$(document).ready(function () {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScrollAnimation() {
    $(
      ".section-block, .members-grid, .album-content, .buttons-container, .youtube-chanel, .poster"
    ).each(function () {
      if (isElementInViewport(this) && !$(this).hasClass("visible")) {
        $(this).addClass("visible");
      }
    });
  }

  $(window).on("scroll", handleScrollAnimation);

  handleScrollAnimation();
});
