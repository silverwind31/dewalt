document.addEventListener("DOMContentLoaded", function() {
  (function() {
      const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

      const numberOfDays = 30;

      const countDown = new Date().getTime() + numberOfDays * day;
      const x = setInterval(function() {
          const now = new Date().getTime();
          const distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / day);
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

          if (distance < 0) {
              clearInterval(x);
          }
      }, 0);
  })();

  var copyPromoCodeLinks = document.querySelectorAll(".copyPromoCode");
  copyPromoCodeLinks.forEach(function(copyPromoCodeLink) {
      copyPromoCodeLink.addEventListener("click", function(event) {
          event.preventDefault();

          var promoCodeTitle = this.closest(".promocode").querySelector(".promocode_title");

          if (promoCodeTitle) {
              var promoCodeText = promoCodeTitle.innerText;

              var tempInput = document.createElement("input");
              tempInput.value = promoCodeText;
              document.body.appendChild(tempInput);

              tempInput.select();
              tempInput.setSelectionRange(0, 99999);

              document.execCommand("copy");

              document.body.removeChild(tempInput);

              this.innerText = "Cкопирован в буфер обмена";
              this.classList.add("success");

              setTimeout(function() {
                  this.innerText = "Копировать ПРОМОКОД";
                  this.classList.remove("success");
              }.bind(this), 1000);
          }
      });
  });

});