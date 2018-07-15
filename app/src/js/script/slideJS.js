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
var serviceSwiperDuration = 8000;
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

//서비스 영역 슬라이드 이벤트는 모두 여기에 정의
var serviceSlideEvent = function() {
  //변수 선언
  var $pagination_current = $(".pagination-text.current");
  var $pagination_entire = $(".pagination-text.entire");
  var progressBar = new TimelineMax();
  var _tl_pagination = new TimelineMax();

  //프로그레스바 타임라인 정의
  progressBar
    .from(
      ".service-slide-progress .line", //대상
      8, //시간
      { width: 0, ease: Linear.easeNone }, //0프레임일 때 사항
      0
    )
    .timeScale(1);

  //페이지네이션 타임라인 정의

  var counter = $(".service-slide-counter");
  var currentCount = $('<span class="count">1<span/>');
  counter.append(currentCount);

  function paginationUpdate() {
    var index = serviceSwiper.realIndex + 1,
      $current = $(".service-slide").eq(index),
      dur = 0.8;

    var prevCount = $(".count");
    currentCount = $('<span class="count next">' + index + "<span/>");
    currentCount.appendTo(counter);
    TweenLite.to(prevCount, dur, {
      y: -12,
      opacity: 0,
      onCompleteParams: [prevCount],
      onComplete: function(prevCount) {
        prevCount.remove();
      },
      ease: Power2.easeOut
    });
    TweenLite.fromTo(
      currentCount,
      dur,
      {
        y: 12,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        ease: Power2.easeOut
      }
    );
  }

  //전체 슬라이드 개수 표시
  $pagination_entire.text(serviceSwiper.slides.length - 2);

  //슬라이드 바뀔 때마다 페이지네이션 숫자 변경 및 프로그레스바 리셋
  serviceSwiper.on("slideChange", function() {
    var slideIndex = serviceSwiper.realIndex;
    // $pagination_current.text(slideIndex + 1);
    paginationUpdate();
    progressBar.restart();
  });
};

// 윈도 로드 시 이벤트 정의
$(window).on("load", function() {
  serviceSlideEvent();
});

/////삭제예정////
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
/////삭제예정////

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
