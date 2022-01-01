$(function () {
  "use strict";
  //    sticky navbar
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $(".sticky-top");
    if (scrolling >= 110) {
      sticky.addClass("navbg");
    } else {
      sticky.removeClass("navbg");
    }
    if (scrolling > 150) {
      bc2top.fadeIn(1000);
    } else {
      bc2top.fadeOut(1000);
    }
  });

  // this is for back to top and sticky menu js
  var bc2top = $(".back-top");
  bc2top.on("click", function () {
    html_body.animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  //    animation scroll js
  var html_body = $("html, body");
  $("a").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 50,
          },
          500
        );
        return false;
      }
    }
  });

  //owl-carousel

  $(".owl-carousel").owlCarousel({
    items: 4,
    nav: false,
    loop: true,
    dots: false,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      720: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
