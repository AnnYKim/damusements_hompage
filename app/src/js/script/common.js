//섹션의 위치값
// index[2,3,4]의 값은 변경될 수 있음 (MORE 버튼을 쓰는 경우)
var sectionTop = [1960, 4508, 6218, 7219, 8205];

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

      if (idx > 2) {
        getSectionTop();
      }

      var position = sectionTop[idx] - headerHeight;

      pageScroll(position);
    });
  };

  // 초기 이벤트 지정
  var initEvent = function() {
    headerHeight = Math.ceil($header.height());
    scrollToSection();
    clickHeaderLogo();
    getSectionTop();
  };

  // 윈도 로드
  $(window).on("load", function() {
    initEvent();
  });
});

///////////////////
//임시로 막아놓음!!!

// var $damuMoreButton = $(".damu-btn-more");
// var $damuWorksItem_hide = $(".damu-works-item.hide");

// $damuMoreButton.on("click", function() {
//   for (var i = 0; i < 3; i++) {
//     $damuWorksItem_hide.eq(i).removeClass("hide");

//     // TweenLite.to($damuWorksItem_hide.eq(i), 2, {
//     //   autoAlpha: 1,
//     //   display: "block"
//     // });
//   }
//   $damuWorksItem_hide = $(".damu-works-item.hide");

//   if (!$damuWorksItem_hide.length) {
//     $damuMoreButton.addClass("disabled");
//   }
// });
