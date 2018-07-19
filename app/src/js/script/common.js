//섹션의 위치값
// index[2,3,4]의 값은 변경될 수 있음 (MORE 버튼을 쓰는 경우)
var sectionTop = [1960, 4510, 7506, 8513, 9493];

$(function() {
  //header js

  var $header = $("#header");
  var $section = $(".has-menu");
  var $navMenu = $header.find(".nav-menu");

  var headerHeight = 0; //header의 높이

  //섹션의 위치 구하는 함수
  var getSectionTop = function() {
    $section.each(function(idx) {
      sectionTop[idx] = Math.ceil($(this).offset().top);
    });
    console.log(sectionTop);
  };

  // 페이지 스크롤 함수
  var pageScroll = function(where, anim) {
    var $body = $("html, body");
    if (anim == null) {
      $body.stop().animate(
        {
          scrollTop: where
        },
        800
      );
    } else {
      $body.stop().animate(
        {
          scrollTop: where
        },
        anim
      );
    }
  };

  // 로고 클릭 시 맨 위로 이동 함수
  var clickHeaderLogo = function() {
    var $headerLogo = $header.find(".header-logo");

    $headerLogo.on("click", function(e) {
      e.preventDefault();
      pageScroll(0);
    });
  };

  // 헤더 메뉴 클릭 시 해당 섹션으로 이동하는 함수
  var scrollToSection = function() {
    $navMenu.on("click", function(e) {
      e.preventDefault();
      var idx = $navMenu.index($(this));
      console.log("menu idx - ", idx);
      var position = sectionTop[idx] - headerHeight;
      pageScroll(position);
    });
  };

  // 초기 이벤트 지정
  var initEvent = function() {
    headerHeight = Math.ceil($header.height());
    scrollToSection();
    clickHeaderLogo();
  };

  // 윈도 로드
  $(window).on("load", function() {
    initEvent();
  });
});
