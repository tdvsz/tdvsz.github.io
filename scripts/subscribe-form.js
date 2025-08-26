$(document).ready(function () {
  $(".subscribe-form").on("submit", function (event) {
    event.preventDefault();

    const emailInput = $(".mail-input");
    const emailValue = emailInput.val().trim();

    $(".feedback-message").remove();
    emailInput.removeClass("invalid-input");

    function isEmailValid(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    }

    if (emailValue === "") {
      emailInput.addClass("invalid-input");
      $(this).after(
        '<div class="feedback-message error">Пожалуйста, заполните поле Email.</div>'
      );
    } else if (!isEmailValid(emailValue)) {
      emailInput.addClass("invalid-input");
      $(this).after(
        '<div class="feedback-message error">Пожалуйста, введите корректный адрес электронной почты.</div>'
      );
    } else {
      $(this).after(
        '<div class="feedback-message success">Спасибо за подписку! Мы добавили ваш email в нашу рассылку.</div>'
      );
      emailInput.val("");

      console.log("Форма валидна. Отправляем email:", emailValue);
    }
  });
});
