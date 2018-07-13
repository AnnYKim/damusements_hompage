// *** 비주얼 슬라이드
var visualSwiper = new Swiper(".visual-slide", {
  // Optional parameters
  loop: true,
  touchRatio: 0,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

// ** 어바웃 슬라이드
var aboutSlide = function() {
  var $aboutSlideButton = $("button.about-story-button");

  var aboutSlideIdx = 0;

  $aboutSlideButton.on("click", function() {
    console.log("버튼클릭");
  });
};

$(window).on("load", function() {
  aboutSlide();
});
