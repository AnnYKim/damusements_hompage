//[*] 스크롤바 너비 구하는 함수
var scrollBarWidth = function() {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// [*] 스크롤 막는 함수
var preventScroll = function() {
  $(".wrap").css({ "padding-right": scrollBarWidth() });

  $("body").addClass("noScroll");
};

// [*] 스크롤 허용하는 함수
var allowScroll = function() {
  $(".wrap").removeAttr("style");
  $("body").removeClass("noScroll");
};

// [*] 팝업창 여는 함수
var openPopup = function(target) {
  preventScroll();
  switch (target) {
    case "damu":
      var $popup = $(".popup-damu");
      break;

    case "dsc":
      var $popup = $(".popup-dsc");
      break;

    case "proz":
      var $popup = $(".popup-proz");
      break;
  }

  $(".popup").show();
  $popup.children(".popup-dim").removeClass("hide");
  _tl_animatePopup.play();
};

// [*] 팝업창 닫는 함수
var closePopup = function() {
  _tl_animatePopup.reverse();
  setTimeout(function() {
    allowScroll();
    $(".popup").hide();
  }, 400);
};

var invisible = function() {
  $(".popup-dim").addClass("hide");
  _tl_animatePopup.reverse();
};

var _tl_animatePopup = new TimelineMax({
  paused: true,
  onReverseComplete: invisible
});

// _tl_animatePopup.from(
//   ".popup-contents", //대상
//   0.4, //시간
//   {
//     opacity: 0,
//     transform: "translateY(100px)",
//     ease: TimelineMax.easeOut
//   }, //0프레임일 때 사항
//   0
// );

_tl_animatePopup
  .add(
    TweenMax.from(".popup-dim", 0.2, {
      css: { opacity: 0 },
      ease: TimelineMax.easeOut
    })
  )
  .add(
    TweenMax.from(".popup-area", 0.4, {
      css: {
        opacity: 0,
        transform: "translateY(100px)",
        ease: TimelineMax.easeOut
      },
      ease: TimelineMax.easeOut
    })
  );

var popupEvent = function() {
  var $popup = $(".popup");
  var $popup_area = $popup.find(".popup-area");
  var $popup_dim = $popup.find(".popup-dim");
  var $popup_button_close = $(".popup-button-close");
  var $popup_link = $("a[data-link-popup]");

  //[*] 팝업닫기
  $popup_button_close.on("click", function(e) {
    e.preventDefault();
    closePopup();
  });

  //[*] dim으로 팝업닫기
  $popup_dim.on("click", function(e) {
    e.preventDefault();
    closePopup();
  });

  //[*] 팝업열기
  $popup_link.on("click", function(e) {
    e.preventDefault();
    var link = $(this).data("link-popup");
    openPopup(link);
  });

  //[*] 콘텐츠 눌렀을 때 버블링 방지
  $popup_area.on("click", function(e) {
    e.stopPropagation();
  });

  //[*] 초기 팝업 숨기기
  $(".popup").hide();
};

var damuPopupEvent = function() {
  //디어뮤 팝업 전용 이벤트

  var $damuItem = $(".damu-works-item a");
  $damuItem.on("click", function(e) {
    e.preventDefault();
    var idx = 0;

    idx = $damuItem.index($(this));
    console.log(idx);
  });
};

$(window).on("load", function() {
  popupEvent();
  damuPopupEvent();
});
