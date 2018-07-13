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
  $("body")
    .css({ "margin-right": scrollBarWidth() })
    .addClass("noScroll");
};

// [*] 스크롤 허용하는 함수
var allowScroll = function() {
  $("body")
    .removeAttr("style")
    .removeClass("noScroll");
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

  $popup.addClass("popup-show");
  setTimeout(function() {
    $popup.children(".popup-dim").addClass("popup-show");
  }, 50);
};

// [*] 팝업창 닫는 함수
var closePopup = function() {
  var $popup = $(".popup:visible");
  $popup.children(".popup-dim").removeClass("popup-show");
  setTimeout(function() {
    $popup.removeClass("popup-show");
  }, 1000);

  allowScroll();
};

var popupEvent = function() {
  var $popup = $(".popup");
  var $popup_contents = $popup.find(".popup-contents");
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
  $popup_contents.on("click", function(e) {
    e.stopPropagation();
  });
};

$(window).on("load", function() {
  popupEvent();
});
