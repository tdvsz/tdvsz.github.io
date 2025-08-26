$(document).ready(function () {
  const quotes = [
    "We don't need no education.",
    "Shine on you crazy diamond.",
    "Is there anybody out there?",
    "Welcome my son, welcome to the machine.",
    "All you touch and all you see, is all your life will ever be.",
  ];

  let currentQuote = 0;

  function rotateQuote() {
    $(".quote").fadeOut(500, function () {
      $(this).text(quotes[currentQuote]).fadeIn(500);
      currentQuote = (currentQuote + 1) % quotes.length;
    });
  }

  setInterval(rotateQuote, 5000);
});
