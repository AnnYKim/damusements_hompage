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

// *** 비주얼 슬라이드
var serviceSwiperDuration = 5000;
var serviceSwiper = new Swiper(".service-slide", {
  // Optional parameters
  loop: true,
  touchRatio: 0,
  // navigation
  navigation: {
    nextEl: ".service-button-next",
    prevEl: ".service-button-prev"
  },

  // autoplay
  autoplay: {
    delay: serviceSwiperDuration,
    disableOnInteraction: false,
    autoplayDisableOnInteraction: false
  },
  autoplayDisableOnInteraction: false,

  // pagination: {
  //   el: ".service-slide-pagination",
  //   type: "progressbar"
  // },
  watchSlidesProgress: true
});

var progressBar = new TimelineMax({
  // onComplete: function() {
  //   this.restart();
  // }
});

progressBar
  .from(".line", 5, { width: 0, ease: Linear.easeNone }, 0)
  .timeScale(1);

var serviceSlideEvent = function() {
  var $pagination_current = $(".pagination-text.current");
  var $pagination_entire = $(".pagination-text.entire");
  var $line = $(".service-slide-progress .line");

  $pagination_entire.text(serviceSwiper.slides.length - 2);

  //페이지네이션 숫자 변경
  serviceSwiper.on("slideChange", function() {
    var slideIndex = serviceSwiper.realIndex;
    $pagination_current.text(slideIndex + 1);
    progressBar.restart();
  });
  serviceSwiper.on("progress", function() {
    // setProgressBar($line, serviceSwiperDuration);
  });

  //프로그레스바 반영
  function setProgressBar(target, duration) {
    var $elem = target;
    var width = 1;
    var playTime = duration / 100;
    var intervalID = setInterval(frame, playTime);
    function frame() {
      if (width >= 100) {
        width = 0;
        clearInterval(intervalID);
      } else {
        width++;
        console.log("~~~width,", width);
        var scaleX = width * 0.01;
        // $elem.css({ width: width + "%" });
        $elem.css({ transform: "scaleX(" + width * 0.01 + ")" });
      }
    }
  }
};

setInterval(function() {
  console.log(serviceSwiper.autoplay.running);
}, 1000);

$(window).on("load", function() {
  serviceSlideEvent();
});

var tl = new TimelineMax({
  paused: true
});

tl.to(".card", 0.6, {
  scaleX: 1,
  transformOrigin: "50% 50%",
  ease: Cubic.easeOut
});

$(".card").on("mouseenter", function() {
  console.log("?");
  tl.play();
});

$(".card").on("mouseleave", function() {
  console.log("!");
  tl.reverse();
});

var parent = new TimelineMax({
  onComplete: function() {
    this.restart();
  }
});

parent.from(".red", 3, { width: 0, ease: Linear.easeNone }, 0).timeScale(2);

// // ** 어바웃 슬라이드
// var aboutSlide = function() {
//   var $aboutSlideButton = $("button.about-story-button");

//   var aboutSlideIdx = 0;

//   var aboutSlide;

//   $aboutSlideButton.on("click", function() {
//     console.log("버튼클릭");
//   });
// };

// $(window).on("load", function() {
//   aboutSlide();
// });
