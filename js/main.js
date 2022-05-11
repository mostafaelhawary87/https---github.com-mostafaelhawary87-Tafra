$(window).on("load", function () {
  $(".pre-loader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });
});
$(document).ready(function () {
  //////////** search **//////////
  $(".search-btn").click(function () {
    $(".search-form").fadeIn(400);
    $("body").addClass("overflow");
    $(".search-cont").addClass("search-in");
    $(".search-input").focus();
  });
  $(".search-form").click(function () {
    $("body").removeClass("overflow");
    $(".search-form").fadeOut(500);
    $(".search-cont").removeClass("search-in");
    $(".search-input").focusout();
  });
  $(".search-cont").click(function (e) {
    e.stopPropagation();
  });

  //////////** main slider **//////////
  var mainswiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });
  //////////** counter slider **//////////
  var counterswiper = new Swiper(".counter-slider .swiper-container", {
    spaceBetween: 15,
    loop: true,
    // autoplay: {
    //   delay: 5100,
    // },
    on: {
      init: function (swiper) {
        setInterval(function () {
          makeTimer();
        }, 1000);
      },
    },
  });
  
     ///////// **our-work** /////////

  var a = 0;
  $(window).scroll(function () {
    if ($("div").hasClass("numbers-flex")) {
      if (
        a === 0 &&
        $(this).scrollTop() >= $(".numbers-flex").offset().top - 500
      ) {
        $(".number span").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 1000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
        a = 1;
      }
    }
  });
    //////////** services slider **//////////
    var servicesswiper = new Swiper(".services-slider .swiper-container", {
      spaceBetween: 30,
      pagination: {
        el: ".services-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        },
      },
    });

  ///////// **footer** /////////
  if ($(window).width() <= 767) {
    $(".has-sub>a").click(function () {
      $(".has-sub>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-sub>a").not(this).siblings().slideUp(500);
    });
  }
  $(".menu-btn").click(function () {
    $("body").addClass("overflow");
    $(".overlay").fadeIn();
    $(".nav-list").addClass("active");
  });
  $(".overlay").click(function () {
    $("body").removeClass("overflow");
    $(".overlay").fadeOut();
    $(".nav-list").removeClass("active");
  });

  if ($(window).width() > 767) {
    $("select.form-control").select2({
      minimumResultsForSearch: Infinity,
    });
    $(".flatpicker").flatpickr();
  }

  $(".advanced-search-btn").click(function () {
    $(".advanced-input").slideToggle("300");
  });
});

function makeTimer() {
  var ele = $(".timer");
  var endTimeVal = $(".timer").attr("data-time");
  var endTime = new Date(endTimeVal);
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }
  seconds = seconds.toString().split("");
  minutes = minutes.toString().split("");
  hours = hours.toString().split("");

  $(ele)
    .find(".hours")
    .html(
      '<div class="number"><span>' +
        hours[1] +
        '</span></div><div class="number"><span>' +
        hours[0] +
        "</span></div>"
    );
  $(ele)
    .find(".minutes")
    .html(
      '<div class="number"><span>' +
        minutes[1] +
        '</span></div><div class="number"><span>' +
        minutes[0] +
        "</span></div>"
    );
  $(ele)
    .find(".seconds")
    .html(
      '<div class="number"><span>' +
        seconds[1] +
        '</span></div><div class="number"><span>' +
        seconds[0] +
        "</span></div>"
    );
}

setInterval(function () {
  makeTimer();
}, 1000);
