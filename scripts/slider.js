$(document).ready(function () {
  const membersSlider = $(".members-slider .slider-container");
  const memberCards = $(".members-grid .member-card");

  memberCards.on("click", function () {
    const index = $(this).index();

    membersSlider.css("transform", `translateX(-${index * 100}%)`);
  });

  const discographySlider = $(".discography .slider-container");
  const discographySlides = $(".discography .slide");
  const discographyDots = $(".discography .nav-dot");

  let currentDiscographyIndex = 0;
  const totalSlides = discographySlides.length;
  let autoplayInterval;

  function goToSlide(index) {
    currentDiscographyIndex = index;

    discographySlider.css("transform", `translateX(-${index * 100}%)`);

    discographyDots.removeClass("active");
    discographyDots.eq(index).addClass("active");
  }

  function startAutoplay() {
    clearInterval(autoplayInterval);

    autoplayInterval = setInterval(function () {
      let nextIndex = (currentDiscographyIndex + 1) % totalSlides;
      goToSlide(nextIndex);
    }, 5000);
  }

  discographyDots.on("click", function () {
    const index = $(this).data("index");
    goToSlide(index);
    startAutoplay();
  });

  $(".discography")
    .on("mouseenter", function () {
      clearInterval(autoplayInterval);
    })
    .on("mouseleave", function () {
      startAutoplay();
    });

  goToSlide(0);
  startAutoplay();
});
